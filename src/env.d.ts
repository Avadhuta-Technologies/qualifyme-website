/// <reference types="astro/client" />

// Google Analytics TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
  }
  
  function gtag(...args: any[]): void;
}

export {};
