import { Bet, BetsMeSeed } from '@/core/domain/entities/bet.entity'

export interface IBetRepository {
  getAll(): Promise<BetsMeSeed>
  getById(id: string): Promise<Bet | null>
}
