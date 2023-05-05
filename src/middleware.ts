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

function isImageURI(pageKey: string) {
  return (
    pageKey.includes('.png') ||
    pageKey.includes('.jpg') ||
    pageKey.includes('.jpeg') ||
    pageKey.includes('.svg') ||
    pageKey.includes('.webp') ||
    pageKey.includes('.gif') ||
    pageKey.includes('.tiff') ||
    pageKey.includes('.bmp') ||
    pageKey.includes('.psd') ||
    pageKey.includes('wp-json')
  );
}

function isNextPageURI(pageKey: string) {
  return (
    pageKey !== Pages.HOME &&
    pageKey !== Pages.METHODOLOGY &&
    pageKey !== Pages.FAVICON &&
    !pageKey.includes(Pages.NEXT_PAGES)
  );
}

export function middleware(req: NextRequest) {
  console.log('Pagina', req.nextUrl.pathname);
  const pageKey: string = req.nextUrl.pathname;

  if (!isNextPageURI(pageKey) && isImageURI(pageKey)) {
    return `${process.env.TARGET_URI}${pageKey}`;
  }

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
