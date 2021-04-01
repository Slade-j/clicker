// frontend/src/components/TopPlaque/index.js
import { container, center, icon, pen } from './TopPlaque.module.css';

function TopPlaque() {

  return (
    <div className={container}>
      <div className={center}>
        <div className={icon}><i className={`fas fa-pen ${pen}`}></i></div>
      </div>
    </div>
  )

}

export default TopPlaque;
