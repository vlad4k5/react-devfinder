import {ReactNode} from 'react'
import s from './AppContainer.module.scss'

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({children}: AppContainerProps) => {
  return (
    <div className={s.appContainer}>
      {children}
    </div>
  )
}

export default AppContainer