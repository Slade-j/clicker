// frontend/src/components/UpLoadNav/index.js
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  uploadNav,
  deleteDiv,
  deleteButton,
  uploadDiv,
  uploadButton,
  allButton,
} from './UploadNav.module.css';

function UploadNav({ selected, setSelected, setIsAll }) {
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

  return (
    <nav className={uploadNav}>
      <div className={deleteDiv}>
        <button className={allButton} onClick={selectAll} disabled={isDisabled}>Select All</button>
        <button className={deleteButton} disabled={isSelected}>Remove</button>
      </div>
      <div className={uploadDiv}>
        <button className={uploadButton} disabled={isDisabled}>{`Upload ${photoCount}`}</button>
      </div>
    </nav>
  )
}

export default UploadNav;
