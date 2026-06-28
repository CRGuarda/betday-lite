export const formatHour = (startTime: string): string => {
  const date = new Date(startTime)
  const hour = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  return hour
}

export const getGroupedHour = (startTime: string): string => {
  const hour = formatHour(startTime)
  const [h] = hour.split(':')
  return `${h}:00` // Ej.12:00
}
