import { useState } from 'react'
import axios from 'axios'
import AppContainer from './components/AppContainer/AppContainer'
import Header from './components/Header/Header'
import './assets/styles/global.scss'
import Search from './components/Search/Search'
import { GithubUser, UserNotFound } from './types/user'
import UserInfo from './components/UserInfo/UserInfo'


const App = () => {
  const [user, setUser] = useState<GithubUser | null>(null)

  const getUser = async (username: string) => {
    const searchedUser = await axios.get(`https://api.github.com/users/${username}`) as GithubUser | UserNotFound
    
    if ('login' in searchedUser) {
      setUser(searchedUser)
    } else {
      setUser(null)
    }
  }

  return (
    <AppContainer>
      <Header />
      <Search 
        getUser={getUser}
        isUserFound={!!user}
      />
      {
        user && <UserInfo/> 
      }
    </AppContainer>
  )
}

export default App
