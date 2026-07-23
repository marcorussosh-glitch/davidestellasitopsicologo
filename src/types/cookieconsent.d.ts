interface Window {
  CookieConsent: {
    showPreferences: () => void;
    acceptedCategory: (category: string) => boolean;
  };
}