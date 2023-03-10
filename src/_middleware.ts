import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/contato',
};

export function middleware(req: NextRequest) {
  req.nextUrl.pathname = '/';

  return NextResponse.rewrite(req.nextUrl);
}
