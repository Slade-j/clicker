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

function UploadNav({ selected, setSelected, setIsAll, test }) {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos)
  const images = useSelector(state => state.images);
  const user = useSelector(state => state.session.user);
  const previews = useSelector(state => state.thumbNails);
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ isSelected, setIsSelected ] = useState(true);
  const [ photoCount, setPhotoCount ] = useState('');

  useEffect(() => {
    if (selected.length) {
      setIsSelected(false);
    }
  }, [selected]);

  useEffect(() => {
    if (previews.length){
      setIsDisabled(false);
      setPhotoCount(`${previews.length} photos`);
    }
  }, [previews]);

  const selectAll = (e) => {
    const selectArr = previews.map(image => image.name)
    setSelected(selectArr);
    setIsAll(true);
  }

  const handleUpload = (e) => {
    // const formData = new FormData();
    // formData.append('images', photos)
    dispatch(postImages(test, user.id));
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
