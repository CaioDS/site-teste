import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export const config = {
//   matcher: '/*',
// };

enum Pages {
  HOME = '/',
  METHODOLOGY = '/methodology',
}

export function middleware(req: NextRequest) {
  console.log('Pagina', req.nextUrl.pathname);
  const pageKey: string = req.nextUrl.pathname;

  if (pageKey !== Pages.HOME && pageKey !== Pages.METHODOLOGY) {
    req.nextUrl.pathname = '/api/proxy';
  }
  return NextResponse.rewrite(req.nextUrl);
}
