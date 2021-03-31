// frontend/src/components/TopNav/TopNav.js

import LinkList from '../LinkList';
import Logo from '../Logo';
import UserPic from '../UserPic';
import SearchBar from '../SearchBar';
import { nav } from './TopNav.module.css';

function TopNav() {
  return (
    <nav className={nav}>
      <Logo />
      <LinkList navArray={['/photos', 'You', '/link/test', 'test1', '/photos', 'test2']} />
      <SearchBar />
      <UserPic />
    </nav>
  )
}

export default TopNav;