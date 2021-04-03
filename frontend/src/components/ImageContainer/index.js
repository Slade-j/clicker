// frontend/src/components/ImageContainer/index.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userPhotos } from '../../store/photos';

function ImageContainer() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);

  useEffect(() => {
    dispatch(userPhotos());
  }, [dispatch]);

  return (
    <div className='main-container'>
      <div className='gallery'>
        {photos.length > 0 ?
          photos.map(photo => {
            return <div
              key={photo.id}
              style={{backgroundImage: `url(${photo.photoUrl})`}}>
              </div>
          }):
          <h2 className='missing'>--Your recent images will appear here--</h2>}
      </div>
    </div>
  )
}

export default ImageContainer;
