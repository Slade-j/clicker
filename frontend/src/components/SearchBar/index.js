// frontend/src/components/SearchBar/SearchBar.js
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import styles from './SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className={styles.search}>
      <div className={styles.links}>
        <Link className={styles.uploadLink} to='/add-photos'>
          <i className="fas fa-cloud-upload-alt fa-2x"></i>
        </Link>
        <div className={styles.uploadModal}>
          <span className={styles.uploadText}>upload images</span>
        </div>
        <button className={styles.logout} onClick={logout}>
          <i className="fas fa-sign-out-alt fa-2x"></i>
        </button>
        <div className={styles.logoutModal}>
          <span className={styles.logoutText}>Log out</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
