import { NextResponse } from 'next/server'
import { cookies } from 'next/cookies'
import type { NextRequest } from 'next/server'

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
    let cookie = cookies(request).get("accessToken")

    if (isLoggedIn || cookie) {
        return NextResponse.next();
    }
    return NextResponse.redirect('/');
}

export const config = {
    api: {
        bodyParser: false,
    },
};
