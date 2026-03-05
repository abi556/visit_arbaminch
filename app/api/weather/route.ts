import { NextResponse } from 'next/server'
import { fetchArbaMinchWeather } from '@/utils/weather'

export async function GET() {
    try {
        const data = await fetchArbaMinchWeather()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Weather API Route error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch weather' },
            { status: 500 }
        )
    }
}
