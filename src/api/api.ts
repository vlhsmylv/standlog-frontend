// src/api/api.ts
export type JSONObject = Record<string, unknown>;

export interface Session {
  id: string;
  anonymousId: string;
  metadata?: unknown;
  createdAt?: string;
}

export interface Event {
  id: string;
  sessionId: string;
  type: string;
  metadata?: JSONObject | null;
  data?: JSONObject | null;
  createdAt?: string;
}

export interface ReportRecord {
  id: string;
  data: {
    totalSessions: number;
    sessions: Array<{
      id: string;
      anonymousId: string;
      metadata?: unknown;
      totalEvents: number;
      eventsByType: Record<string, number>;
    }>;
  };
  createdAt?: string;
}

const BASE =
  (import.meta.env.VITE_API_URL as string) ?? "http://localhost:3000";

export async function apiGetLatestReport(): Promise<ReportRecord> {
  const res = await fetch(`${BASE}/api/report`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText}${msg ? ` - ${msg}` : ""}`
    );
  }
  return res.json();
}

export async function apiCreateSession({
  anonymousId,
  metadata,
}: {
  anonymousId: string;
  metadata?: JSONObject | null;
}): Promise<Session> {
  const res = await fetch(`${BASE}/api`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ anonymousId, metadata }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText}${msg ? ` - ${msg}` : ""}`
    );
  }
  return res.json();
}

export async function apiLogEvent({
  sessionId,
  type,
  metadata,
  data,
}: {
  sessionId: string;
  type: string;
  metadata?: JSONObject | null;
  data?: JSONObject | null;
}): Promise<Event> {
  const res = await fetch(`${BASE}/api/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, type, metadata, data }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText}${msg ? ` - ${msg}` : ""}`
    );
  }
  return res.json();
}
