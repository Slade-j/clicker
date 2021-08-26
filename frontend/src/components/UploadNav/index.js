// frontend/src/components/UpLoadNav/index.js
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { postImages } from '../../store/images';
import {
  uploadNav,
  deleteDiv,
  deleteButton,
  uploadDiv,
  uploadButton,
  allButton,
} from './UploadNav.module.css';
import { useHistory } from 'react-router-dom';

function UploadNav(
  {
    selected,
    setSelected,
    setIsAll,
    imageData,
    setImageData,
  }
) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector(state => state.photos.photos)
  const images = useSelector(state => state.images);
  const user = useSelector(state => state.session.user);
  const previews = useSelector(state => state.thumbNails);
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ isSelected, setIsSelected ] = useState(true);
  const [ photoCount, setPhotoCount ] = useState('');

  useEffect(() => {
    selected.length > 0 ? setIsSelected(false):setIsSelected(true);
  }, [selected]);

  useEffect(() => {
    if (previews.length){
      setIsDisabled(false);
      setPhotoCount(`${previews.length} photos`);
    } else {
      setIsDisabled(true);
      setPhotoCount('')
    }
  }, [previews]);

  const selectAll = (e) => {
    const selectArr = previews.map(image => image.name)
    setSelected(selectArr);
    setIsAll(true);
  }

  const handleUpload = (e) => {
    dispatch(postImages(imageData, user.id));
    setImageData([]);
  }

  const handleCancel = (e) => {
    e.stopPropagation();
    history.push('/photos')
  }

  return (
    <nav className={uploadNav}>
      <div className={deleteDiv}>
        <button
        className={allButton}
        onClick={selectAll}
        disabled={isDisabled}>
          Select All
        </button>
        <button className={deleteButton} disabled={isSelected}>Remove</button>
      </div>
      <div className={uploadDiv}>
        <button className={"cancel"} onClick={handleCancel}>Cancel</button>
        <button
        className={uploadButton}
        disabled={isDisabled}
        onClick={handleUpload}>
          {`Upload ${photoCount}`}
        </button>
      </div>
    </nav>
  )
}

export default UploadNav;
