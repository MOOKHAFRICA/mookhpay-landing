// Prefix for static assets on GitHub Pages (project site under /mookhpay-landing).
// next/link hrefs get the basePath automatically — only use BASE for asset src paths.
export const BASE =
  process.env.NODE_ENV === "production" ? "/mookhpay-landing" : "";
