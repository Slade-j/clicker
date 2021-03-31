// frontend/src/components/SearchBar/SearchBar.js

import { search, field, glass } from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={search}>
      <form>
        <label className={glass}>
          <input className={field} placeholder='Search a photos or albums'></input>
        </label>
      </form>
    </div>
  )
}

export default SearchBar;
