import { BetStatus } from '@/core/domain/entities/bet.entity'
import { Chip, ChipProps, ChipVariants } from '@heroui/react'

const STATUS_STYLES: Record<BetStatus, ChipVariants['color']> = {
  PENDING: 'warning',
  WON: 'success',
  LOST: 'danger',
}

type BetStatusChipProps = {
  status: BetStatus
} & Omit<ChipProps, 'children'>

export const BetStatusChip = ({ status, ...props }: BetStatusChipProps) => {
  const color = STATUS_STYLES[status] || 'default'
  return (
    <Chip color={color} variant='soft' {...props}>
      <Chip.Label>{status}</Chip.Label>
    </Chip>
  )
}
