'use client'

import { ToggleButton, ToggleButtonGroup } from '@heroui/react'
import { useTheme } from 'next-themes'
import { DesktopIcon, MoonIcon, SunIcon } from '@phosphor-icons/react/dist/ssr'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleButtonGroup size='sm' selectionMode='single' defaultSelectedKeys={[theme || 'system']}>
      <ToggleButton id='light' isIconOnly onPress={() => setTheme('light')}>
        <SunIcon />
      </ToggleButton>
      <ToggleButton id='dark' isIconOnly onPress={() => setTheme('dark')}>
        <MoonIcon />
      </ToggleButton>
      <ToggleButton id='system' isIconOnly onPress={() => setTheme('system')}>
        <DesktopIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
