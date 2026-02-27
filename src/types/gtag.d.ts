interface Window {
  gtag: (
    command: "config" | "event" | "js" | "set",
    targetOrName: string | Date,
    params?: Record<string, string | boolean | number>
  ) => void;
  dataLayer: Array<unknown>;
}
