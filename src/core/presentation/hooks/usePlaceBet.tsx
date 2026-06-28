import { getBetPick } from '@/core/application/use-cases/getBetPick'
import { placeBetUseCase } from '@/core/application/use-cases/placeBetUseCase'
import { BetPick } from '@/core/domain/entities/bet.entity'
import { Match } from '@/core/domain/entities/match.entity'
import { delay } from '@/core/helpers/delay'
import { useBetStore } from '@/core/presentation/store/bet.store'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

export const usePlaceBet = ({ match }: { match: Match }) => {
  const placeBet = useBetStore((s) => s.placeBet)
  const { status } = useSession()

  const handlePick = (pick: BetPick) => {
    const bet = placeBetUseCase({ match, pick })

    const betPromise = async () => {
      await delay(600) // Utilizo delay y promise para simular un delay de la API
      if (status !== 'authenticated') throw new Error('Usuario no autenticado')
      placeBet(bet)
    }

    toast.promise(betPromise, {
      loading: 'Apuesta en curso...',
      success: () => (
        <section>
          <h2>¡Apuesta realizada!</h2>
          <p>
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>
          <small>
            {getBetPick(bet)} @ {bet.odd.toFixed(2)}
          </small>
        </section>
      ),
      error: (err) => {
        return err.message
      },
    })
  }

  return {
    handlePick,
  }
}
