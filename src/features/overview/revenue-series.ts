/**
 * Revenue / dealer-profit series and chart geometry — pure functions.
 *
 * Reproduces `buildRevenueSeries` and the maths inside `RevenueProfitChart`
 * from `reference/workspace-app.jsx` (:4243, :4277). The shapes are the
 * prototype's own deterministic models, not real data — reproduced exactly so
 * the curve matches.
 *
 * Spec: Overview Graph Cards (Dealer Profit and Revenue), Sep 01 2026 — two
 * graph cards side by side with a Day / Month / Year granularity toggle.
 */

export type RevenueScale = "day" | "month" | "year";

export interface SeriesPoint {
  label: string;
  revenue: number;
  profit: number;
  margin: number;
}

/**
 * `now` is injected rather than read from the clock so the series is stable
 * across renders and comparable between runs — the prototype reads `new Date()`
 * directly, which is part of why its figures drift (OQ-P17).
 */
export function buildRevenueSeries(total: number, scale: RevenueScale, now: Date): SeriesPoint[] {
  const base = rawSeries(total, scale, now);
  // Prototype: "Per-period margin varies ~30–38% (deterministic) so the profit
  // line carries its own shape instead of tracing revenue exactly."
  return base.map((d, i) => {
    const margin = 0.3 + 0.08 * (((i * 37) % 10) / 10);
    return { ...d, profit: Math.round(d.revenue * margin), margin };
  });
}

function rawSeries(total: number, scale: RevenueScale, now: Date): { label: string; revenue: number }[] {
  if (scale === "day") {
    const daily = total / 30; // approx daily run-rate
    return Array.from({ length: 14 }, (_, k) => {
      const i = 13 - k;
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const w = 0.55 + 0.9 * Math.abs(Math.sin((d.getDate() + d.getMonth() * 3) * 1.3));
      return {
        label: d.toLocaleDateString("en-US", { month: "numeric", day: "numeric" }),
        revenue: Math.round(daily * w),
      };
    });
  }

  if (scale === "year") {
    const nowY = now.getFullYear();
    const factors = [0.42, 0.61, 0.78, 1.0]; // growth curve into the current year
    const annual = total * 12; // annualised run-rate
    return factors.map((f, i) => ({
      label: String(nowY - (factors.length - 1) + i),
      revenue: Math.round(annual * f),
    }));
  }

  // month (default) — trailing 12 months ending in the current month.
  const weights = [0.6, 0.8, 1.1, 0.7, 0.9, 1.2, 1.35, 1.5, 1.0, 1.15, 1.3, 1.05];
  const wsum = weights.reduce((a, b) => a + b, 0);
  return weights.map((w, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    return {
      label: d.toLocaleDateString("en-US", { month: "short" }),
      revenue: Math.round((total * w) / wsum),
    };
  });
}

/** Axis tick step — 1 / 2 / 2.5 / 5 / 10 × a power of ten. Prototype `:4295`. */
export function tickStep(v: number): number {
  const raw = Math.max(v, 1) / 5;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / p;
  const s = m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10;
  return s * p;
}

export function axisTicks(top: number): { max: number; ticks: number[] } {
  const step = tickStep(top);
  const max = Math.ceil(top / step) * step;
  return { max, ticks: Array.from({ length: Math.round(max / step) + 1 }, (_, i) => i * step) };
}

/** Smoothed cubic path through [x, y] points. Prototype `:4310`. */
export function smoothPath(points: readonly (readonly [number, number])[]): string {
  return points
    .map((p, i) => {
      if (i === 0) return `M${p[0]},${p[1]}`;
      const q = points[i - 1];
      const c = (p[0] - q[0]) / 2;
      return `C${q[0] + c},${q[1]} ${p[0] - c},${p[1]} ${p[0]},${p[1]}`;
    })
    .join(" ");
}

export function formatMoneyShort(v: number): string {
  return "$" + Math.round(v).toLocaleString("en-US");
}

export function percentDelta(a: number, b: number): number {
  return b ? Math.round((Math.abs(a - b) / b) * 100) : 0;
}
