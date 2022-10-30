import {ReactComponent as moon} from '../../assets/img/moon.svg'
import s from './Header.module.scss'


const Header = () => {

  const ThemeIcon = moon
  return (
    <header className={s.header}>
      <div className={s.logo}>
        devfinder
      </div>

      <div className={s.themeSwitcher}>
        <span className={s.themeName}>Dark</span>
        <ThemeIcon />
      </div>
    </header>
  )
}

export default Header