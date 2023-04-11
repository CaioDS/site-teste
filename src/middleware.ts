import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export const config = {
//   matcher: '/*',
// };

enum Pages {
  HOME = '/',
  METHODOLOGY = '/methodology',
  NEXT_PAGES = '/_next',
  FAVICON = '/favicon.ico',
}

export function middleware(req: NextRequest) {
  console.log('Pagina', req.nextUrl.pathname);
  const pageKey: string = req.nextUrl.pathname;

  if (
    pageKey !== Pages.HOME &&
    pageKey !== Pages.METHODOLOGY &&
    pageKey !== Pages.FAVICON &&
    !pageKey.includes(Pages.NEXT_PAGES)
  ) {
    req.nextUrl.pathname = '/api/proxy';
  }
  return NextResponse.rewrite(req.nextUrl);
}
