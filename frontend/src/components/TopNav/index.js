// frontend/src/components/TopNav/TopNav.js

// import LinkList from '../LinkList';
// import UserPic from '../UserPic';
// import Logo from '../Logo';
// import SearchBar from '../SearchBar';
// import { nav, wrapper, left, right } from './TopNav.module.css';

function TopNav({ selectors, components, navArray }) {
  const { nav, wrapper, left, right } = selectors;
  const { First, Second, Third, Fourth } = components;


  return (
    <nav className={nav}>
      <div className={wrapper}>
        <div className={left}>
          {First && <First />}
          {Second && <Second navArray={navArray} />}
        </div>
        <div className={right}>
          {Third && <Third />}
          {Fourth && <Fourth />}
        </div>
      </div>
    </nav>
  )
}

export default TopNav;
