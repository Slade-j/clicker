// frontend/src/components/DropPhoto/index.js
import { useState } from 'react';
import {
  dropZone,
  or,
  buttonHolder,
  labelButton,
  uploader,
  thumbNail,
  thumbContainer,
  display
 } from './DropPhoto.module.css'

function DropPhoto() {
  const [ previews, setPreviews ] = useState({ name: null, url: null });

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('drop event fired')
    setPreviews({
      url: URL.createObjectURL(e.dataTransfer.files[0]),
      name: e.dataTransfer.files[0].name
    });

    URL.revokeObjectURL(previews.url);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('drag event fired')
    e.dataTransfer.dropEffect = 'copy';
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('drag enter event fired');
  }

  return (
    <div className={previews.url?display:dropZone}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop = {handleDrop}>
      {previews.url ?
        <div className={thumbContainer}>
          <img src={previews.url} className={thumbNail} />
          <span>{previews.name}</span>
          </div> :
        <div className='TextHolder'>
          <h2 className='title'>Drag and drop photos here</h2>
          <h2 className={or}>or</h2>
          <div className={buttonHolder}>
            <label htmlFor='file' className={labelButton}>Choose photo from file</label>
            <input type='file' id='file' className={uploader}></input>
          </div>
        </div>
      }
      </div>
  )
}

export default DropPhoto;
