// frontend/src/components/SearchBar/SearchBar.js
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { search, field, glass, links } from './SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className={search}>
      <form>
        <label className={glass}>
          <input className={field} placeholder='Search a photos or albums'></input>
        </label>
      </form>
      <div className={links}>
        <Link to='/add-photos'>Upload</Link>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  )
}

export default SearchBar;
