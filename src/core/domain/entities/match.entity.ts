export type MatchesSeed = {
  date: string
  timezone: string
  matches: Match[]
}

export type Match = {
  id: string
  startTime: string
  league: League
  homeTeam: Team
  awayTeam: Team
  market: Market
}

export type Team = {
  id: string
  name: string
  shortName: string
}

export type League = {
  id: string
  name: string
  country: string
}

export type Market = {
  type: BetMarketType
  odds: Odds
}

export type Odds = {
  home: number
  draw: number
  away: number
}

export enum BetMarketType {
  The1X2 = '1X2',
}
