// frontend/src/components/DropPhoto/index.js
import { useDispatch } from 'react-redux';
import { addPhotos } from '../../store/photos';
import './DropPhotos.css';


function DropPhoto() {
  const dispatch = useDispatch();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropigation();
    const photos = e.dataTransfer.files;
    console.log(photos);
    // dispatch(addPhotos(photos));
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropigation();
    e.dataTransfer.dropEffect = 'copy';
  }

  return (
    <div className='dropZone'
      onDragOver={handleDragOver}
      onDrop = {handleDrop}>
      <div className='TextHolder'>
        <h2 className='title'>Drag and drop photos here</h2>
        <h2 className='or'>or</h2>
        <div className='button holder'>
          <button className='uploadButton'>Choose photos to upload</button>
        </div>
      </div>
    </div>
  )
}

export default DropPhoto;
