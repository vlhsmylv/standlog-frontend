// src/lib/api.ts
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

const BASE = (import.meta.env.VITE_API_URL as string) ?? "http://localhost:3000";

export async function apiGetLatestReport(): Promise<ReportRecord> {
  const res = await fetch(`${BASE}/api/session/report`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText}${msg ? ` - ${msg}` : ""}`);
  }
  return res.json();
}
