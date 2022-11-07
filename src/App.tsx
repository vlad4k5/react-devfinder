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
    const res = await axios.get(`https://api.github.com/users/${username}`)
    const searchedUser: GithubUser | UserNotFound = res.data
    
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
        user && <UserInfo {...user}/> 
      }
    </AppContainer>
  )
}

export default App
