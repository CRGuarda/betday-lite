import { Match } from '@/core/domain/entities/match.entity'

export type BetsMeSeed = {
  bets: Bet[]
}

export type Bet = {
  id: string
  matchId: string
  placedAt: string
  pick: BetPick
  odd: number
  stake: number
  status: BetStatus
  return: number | null
}

export enum BetPick {
  Away = 'AWAY',
  Draw = 'DRAW',
  Home = 'HOME',
}

export enum BetStatus {
  Lost = 'LOST',
  Pending = 'PENDING',
  Won = 'WON',
}

export type BetWithMatch = Bet & {
  match: Match
}
