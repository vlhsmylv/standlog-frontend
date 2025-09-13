// src/api/analytics.ts
import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiCreateSession, apiGetLatestReport, apiLogEvent, type JSONObject, type Session, type Event, type ReportRecord } from "./api";

const ANON_KEY = "ia_anonymous_id";
const SESSION_CACHE_KEY = "ia_session_json";

function getOrCreateAnonymousId() {
  let id = localStorage.getItem(ANON_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(ANON_KEY, id);
  }
  return id;
}

export function useLatestReport() {
  return useQuery<ReportRecord, Error>({
    queryKey: ["latestReport"],
    queryFn: () => apiGetLatestReport(),
    refetchOnWindowFocus: false,
  });
}

export function useCreateSession() {
  const queryClient = useQueryClient();
  const anonymousId = useMemo(getOrCreateAnonymousId, []);

  return useMutation<Session, Error, { metadata?: JSONObject | null }>({
    mutationFn: ({ metadata }) => apiCreateSession({ anonymousId, metadata }),
    onSuccess: (session) => {
      localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(session));
      // If you want, invalidate report to refresh numbers after new session
      queryClient.invalidateQueries({ queryKey: ["latestReport"] }).catch(() => {});
    },
  });
}

export function useLogEvent() {
  const queryClient = useQueryClient();

  return useMutation<Event, Error, { sessionId: string; type: string; metadata?: JSONObject | null; data?: JSONObject | null }>({
    mutationFn: (vars) => apiLogEvent(vars),
    onSuccess: () => {
      // After logging events, the aggregated report might change
      queryClient.invalidateQueries({ queryKey: ["latestReport"] }).catch(() => {});
    },
  });
}

export function getCachedSession(): Session | null {
  const raw = localStorage.getItem(SESSION_CACHE_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as Session; } catch { return null; }
}
