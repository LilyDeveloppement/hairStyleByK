declare namespace Calendly {
  interface CalendlyOptions {
    url: string;
    parentElement: HTMLElement;
    prefill?: {
      email?: string;
      firstName?: string;
      lastName?: string;
      name?: string;
    };
    utm?: {
      utmCampaign?: string;
      utmSource?: string;
      utmMedium?: string;
      utmContent?: string;
      utmTerm?: string;
    };
  }

  function initInlineWidget(options: CalendlyOptions): void;
  function initPopupWidget(options: CalendlyOptions): void;
}
