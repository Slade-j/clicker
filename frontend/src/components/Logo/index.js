// frontend/src/components/Logo/Logo.js

import { NavLink } from 'react-router-dom';
import { logo, circles, blue, red, text, linkedLogo} from './Logo.module.css';

// special componant for logo
function Logo() {
  return (
    <div className={logo}>
      <div className={circles}>
        <div className={blue}></div>
        <div className={red}></div>
      </div>
      <div className='text-container'></div>
        <NavLink className={linkedLogo} to={'/photos'}>
          <h3 className={text}>tickr</h3>
        </NavLink>
    </div>
  )
}

export default Logo;
