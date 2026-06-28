import { z } from 'zod'
import { BetPick, BetStatus } from '@/core/domain/entities/bet.entity'
import { IBetRepository } from '@/core/domain/repositories/betRepository.type'

const BetSchema = z.object({
  id: z.string(),
  matchId: z.string(),
  placedAt: z.string(),
  pick: z.enum(BetPick),
  odd: z.number(),
  stake: z.number(),
  status: z.enum(BetStatus),
  return: z.number().nullable(),
})

const BetsMeSeedSchema = z.object({
  bets: z.array(BetSchema),
})

export const betRepository: IBetRepository = {
  async getAll() {
    const res = await fetch(`${process.env.API_BASE_URL}/api/bets`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch bets')
    const data = await res.json()
    return BetsMeSeedSchema.parse(data)
  },
  async getById(id: string) {
    const res = await fetch(`${process.env.API_BASE_URL}/api/bets/${id}`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch bet')
    const data = await res.json()
    return BetSchema.parse(data)
  },
}
