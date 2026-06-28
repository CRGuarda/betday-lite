// core/infrastructure/api/match.repository.impl.ts
import { BetMarketType } from '@/core/domain/entities/match.entity'
import { IMatchRepository } from '@/core/domain/repositories/matchRepository.type'
import { z } from 'zod'

const OddsSchema = z.object({
  home: z.number(),
  draw: z.number(),
  away: z.number(),
})

const MarketSchema = z.object({
  type: z.enum(BetMarketType),
  odds: OddsSchema,
})

const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
})

const MatchSchema = z.object({
  id: z.string(),
  startTime: z.string(),
  league: z.object({
    id: z.string(),
    name: z.string(),
    country: z.string(),
  }),
  homeTeam: TeamSchema,
  awayTeam: TeamSchema,
  market: MarketSchema,
})

const MatchesTodaySeedSchema = z.object({
  date: z.string(),
  timezone: z.string(),
  matches: z.array(MatchSchema),
})

export const matchRepository: IMatchRepository = {
  async getAll() {
    const res = await fetch(`${process.env.API_BASE_URL}/api/matches`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error('Failed to fetch matches')
    const data = await res.json()
    return MatchesTodaySeedSchema.parse(data)
  },
}
