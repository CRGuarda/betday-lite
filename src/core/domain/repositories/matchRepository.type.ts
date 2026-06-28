import { MatchesSeed } from '@/core/domain/entities/match.entity'

export interface IMatchRepository {
  getAll(): Promise<MatchesSeed>
}
