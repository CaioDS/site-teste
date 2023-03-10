import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/contato',
};

export function middleware(req: NextRequest) {
  req.nextUrl.pathname = '/api/proxy';

  return NextResponse.rewrite(req.nextUrl);
}
