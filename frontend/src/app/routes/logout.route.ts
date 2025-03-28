import { NextRequest, NextResponse } from 'next/server';

export const LogoutRoute = (req: NextRequest) => {
  const origin = req.nextUrl.origin;
  console.log('LogoutRoute');
  return NextResponse.redirect(origin, {
    headers: {
      'Clear-Site-Data': `"*"`,
      'Cache-Control': 'no-store',
    },
  });
};
