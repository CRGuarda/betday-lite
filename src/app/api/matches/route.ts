import matchesData from '@/core/data/matches.today.50.json'
import { delay } from '@/core/helpers/delay'
import { NextResponse } from 'next/server'

export async function GET() {
  await delay(700)
  return NextResponse.json(matchesData)
}
