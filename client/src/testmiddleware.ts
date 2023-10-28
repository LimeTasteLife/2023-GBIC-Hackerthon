// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';

// export { default } from 'next-auth/middleware';

// export async function middleware(req: NextRequest) {
//   const session = await getToken({ req });

//   console.log(req.nextUrl.pathname); // '/user'
//   console.log('session' + JSON.stringify(session));

//   const pathname = req.nextUrl.pathname;

//   // Only logged in users can access
//   if (pathname.startsWith('/Minting') && !session) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   if (pathname.startsWith('/MyNFT') && !session) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   if (pathname.startsWith('/transferNFT') && !session) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   // Logged-in users do not access the login / membership registration pages.
//   if (pathname.startsWith('/auth') && session) {
//     return NextResponse.redirect(new URL('/', req.url));
//   }

//   // Pass if none of the above apply
//   return NextResponse.next();
// }

// //export const config = { matcher: ['/admin/:path*', '/user/:path*'] };

// // export { default } from 'next-auth/middleware';

// // export const config = { matcher: ['/creator/:path*', '/user/:path*'] };
