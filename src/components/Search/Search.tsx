import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'
import s from './Search.module.scss'

const Search = () => {

  const findUser = () => {

  }

  return (
    <div className={s.searchContainer}>
      <label className={s.label} htmlFor="search">
        <SearchIcon />
      </label>
      <input
        className={s.searchInput} 
        autoComplete="off"
        id="search"
        type="text"
        placeholder="Enter GitHub username..."
      />
      <button className={s.searchButton} onClick={findUser}>
        Search
      </button>
    </div>
  )
}

export default Search