import { betRepository } from '@/core/infrastructure/api/bet.repository.impl'
import { matchRepository } from '@/core/infrastructure/api/match.repository.impl'
import { getBetsWithMatchUseCase } from '@/core/application/use-cases/getBetsWithMatchUseCase'
import { ProfileView } from '@/core/presentation/components/ProfileView/ProfileView'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const serverBets = await getBetsWithMatchUseCase(betRepository, matchRepository)
  return <ProfileView serverBets={serverBets} />
}
