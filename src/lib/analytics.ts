export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackGenerateLead(source: string) {
  trackEvent("generate_lead", { event_category: "engagement", event_label: source });
}

export function trackCtaClick(ctaName: string) {
  trackEvent("cta_click", { event_category: "engagement", event_label: ctaName });
}
