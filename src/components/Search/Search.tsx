import {useState} from 'react'
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'
import s from './Search.module.scss'

interface SearchProps {
  getUser: (username: string) => void,
  isUserFound: boolean
}


const Search = ({getUser, isUserFound}: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={s.searchContainer}>
      <label className={s.label} htmlFor="search">
        <SearchIcon />
      </label>
      <input
        className={s.searchInput} 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoComplete="off"
        id="search"
        type="text"
        placeholder="Enter GitHub username..."
      />
      <button className={s.searchButton} onClick={() => getUser(searchValue)}>
        Search
      </button>
    </div>
  )
}

export default Search