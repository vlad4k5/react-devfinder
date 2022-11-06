import AppContainer from './components/AppContainer/AppContainer'
import Header from './components/Header/Header'
import './assets/styles/global.scss'
import Search from './components/Search/Search'


const App = () => {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  )
}

export default App
