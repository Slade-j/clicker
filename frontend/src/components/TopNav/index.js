// frontend/src/components/TopNav/TopNav.js

import LinkList from '../LinkList';
import Logo from '../Logo';
import UserPic from '../UserPic';
import SearchBar from '../SearchBar';
import { nav, wrapper, left, right } from './TopNav.module.css';

function TopNav() {
  return (
    <nav className={nav}>
      <div className={wrapper}>
        <div className={left}>
          <Logo />
          <LinkList navArray={['/photos', 'You', '/link/test', 'test1', '/login', 'test2']} />
        </div>
        <div className={right}>
          <SearchBar />
          <UserPic />
        </div>
      </div>
    </nav>
  )
}

export default TopNav;
