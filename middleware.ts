import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
 
export default withAuth(
    function middleware(req) {
        const { role } = req.nextauth.token?.user as any;
        const validRoles = ['admin', 'super-admin'];
        if (!validRoles.includes(role)) {
            return NextResponse.redirect(new URL('/admin', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
);
 
export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*']
};