import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const data = await req.json();
    const FORMSPREE_ID = process.env.FORMSPREE_ID || 'mbdzjjdk';

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await response.json();
            return NextResponse.json({ success: false, errors: errorData.errors }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
