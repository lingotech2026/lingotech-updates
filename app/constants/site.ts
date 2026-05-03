const DEFAULT_SITE_URL = 'https://lingotechsolutions.com';

function normalizeSiteUrl(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
