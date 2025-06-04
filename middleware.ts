import createMiddleware from 'next-intl/middleware';
import config from './next-intl.config'; // مسیر به فایل بالا

export default createMiddleware(config);

export const configMatcher = {
  matcher: ['/((?!_next|favicon.ico).*)']
};
