import { useEffect, useState } from 'react'
import {ReactComponent as MoonIcon} from '../../assets/img/moon.svg'
import {ReactComponent as SunIcon} from '../../assets/img/sun.svg'
import s from './Header.module.scss'


const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const ThemeIcon = theme === 'light' ?  MoonIcon : SunIcon

  return (
    <header className={s.header}>
      <div className={s.logo}>
        devfinder
      </div>

      <div className={s.themeSwitcher} onClick={toggleTheme}>
        <span className={s.themeName}>{theme === 'light' ? 'dark' : 'light'}</span>
        <ThemeIcon />
      </div>
    </header>
  )
}

export default Header