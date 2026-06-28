import { create } from 'zustand'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'

type BetStore = {
  bets: BetWithMatch[]
  placeBet: (bet: BetWithMatch) => void
  clearBets: () => void
}

export const useBetStore = create<BetStore>((set) => ({
  bets: [],
  placeBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
  clearBets: () => set({ bets: [] }),
}))

// SI SE REQUIERE PERSISTENCIA, SE PUEDE USAR EL MIDDLEWARE DE ZUSTAND 'persist', ABAJO EL EJEMPLO DE COMO SERÍA
/* 
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BetWithMatch } from '@/core/domain/entities/bet.entity'

type BetStore = {
  bets: BetWithMatch[]
  placeBet: (bet: BetWithMatch) => void
  clearBets: () => void
}

export const useBetStore = create<BetStore>()(
  persist(
    (set) => ({
      bets: [],
      placeBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
      clearBets: () => set({ bets: [] }),
    }),
    { name: 'betday-bets' } // el nombre que se utilizará en localStorage
  )
)
*/
