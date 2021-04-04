// frontend/src/components/ImageTile/index.js
import { Link } from 'react-router-dom';
import { mainContainer, overlay, overlayContent } from './ImageTile.module.css';


function ImageTile({photoUrl, photoId, width, height}) {









  return (
    <div className={mainContainer} style={{width, height,}}>
      <img src={photoUrl} className='image' style = {{width, height, }}></img>
      <Link to={`/photos/${photoId}`} className={overlay} />
      <div className={overlayContent}>
        <div className='titleContainer'>
          <div className='title'>
            <Link to={`/photos/${photoId}`} className='titleLink'>
              <span className='titleText'>Title</span>
            </Link>
          </div>
          <div className='author'>
            <span className='authorText'>YOU</span>
          </div>
        </div>
        <div className='iconContainer'>
          <div className='starDisabled'>
            <span className='star'>Star</span>
          </div>
          <div className='commentModal'>
            <button className='showComent'>
              <span className='comment'>Comment</span>
            </button>
          </div>
          <div className='album'>
            <button className='showAlbum'>
              <span className='album'>Album</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTile;
