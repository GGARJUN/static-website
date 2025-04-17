// lib/gtag.js
export const GA_TRACKING_ID = 'G-F1JB1QBQFB';

// Log page views
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
