import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/contato',
};

export function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const country = (req.geo && req.geo.country) || 'US';

  console.log(`Visitor from ${country}`);

  // Specify the correct route based on the requests location

  req.nextUrl.pathname = '/x';

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
}
