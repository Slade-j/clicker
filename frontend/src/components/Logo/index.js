// frontend/src/components/Logo/Logo.js

import { logo, circles, blue, red, text} from './Logo.module.css';

// special componant for logo
function Logo() {
  return (
    <div className={logo}>
      <div className={circles}>
        <div className={blue}></div>
        <div className={red}></div>
      </div>
      <div className='text-container'></div>
        <h3 className={text}>tickr</h3>
    </div>
  )
}

export default Logo;
