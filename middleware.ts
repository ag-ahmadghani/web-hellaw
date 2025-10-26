import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (error) {
    // Verifikasi gagal -> hapus cookie dan redirect ke login
    console.error("Token verification failed:", error);
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token'); // Menghapus cookie yang tidak valid
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*', '/admin'],
};
