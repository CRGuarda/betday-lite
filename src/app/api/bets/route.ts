import { NextResponse } from 'next/server'
import betsData from '@/core/data/bets.me.50.json'

export async function GET() {
  return NextResponse.json(betsData)
}
