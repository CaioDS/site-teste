import { NextURL } from 'next/dist/server/web/next-url';
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
    pageKey.includes('.php') ||
    pageKey.includes('wp-json') ||
    pageKey.includes('wp-content')
  );
}

function isNextPageURI(pageKey: string) {
  return (
    pageKey === Pages.HOME ||
    pageKey === Pages.METHODOLOGY ||
    pageKey === Pages.FAVICON ||
    pageKey.includes(Pages.NEXT_PAGES)
  );
}

function decideGatewayURI(
  pageKey: string,
  pageSearch: string,
  requestUrl: NextURL
): NextURL | string {
  if (
    !isNextPageURI(pageKey) &&
    isImageURI(pageKey)
    // || (isNextPageURI(pageKey) && pageSearch.includes('elementor-preview'))
  ) {
    return `${process.env.TARGET_URI}${pageKey}${pageSearch}`;
  }

  if (
    !isNextPageURI(pageKey) ||
    (isNextPageURI(pageKey) && pageSearch.includes('elementor-preview'))
  ) {
    requestUrl.pathname = '/api/proxy';
    return requestUrl;
  }

  return requestUrl;
}

export function middleware(req: NextRequest) {
  console.log('Pagina', req.nextUrl.pathname);
  const pageKey: string = req.nextUrl.pathname;
  const pageSearch: string = req.nextUrl.search;

  return NextResponse.rewrite(
    decideGatewayURI(pageKey, pageSearch, req.nextUrl)
  );
}
