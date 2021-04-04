// frontend/src/components/DropPhoto/index.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addThumbNails } from '../../store/thumbNails';
import { addPhotos } from '../../store/photos';
import UploadNav from '../UploadNav';
import {
  dropZone,
  or,
  buttonHolder,
  labelButton,
  uploader,
  thumbNail,
  thumbContainer,
  display,
  wrapperContainer,
  thumbFocus,
  all
 } from './DropPhoto.module.css'

function DropPhoto() {
  const dispatch = useDispatch();
  const previews = useSelector(state => state.thumbNails)
  const [ selected, setSelected ] = useState([]);
  const [ divFocus, setDivFocus ] = useState(`${thumbContainer}`);
  const [ isAll, setIsAll ] = useState(false);
  const [ allClass, setAllClass ] = useState(`${display}`)
  const [ fileValue, setFileValue ] = useState('');
  const [ imageData, setImageData ] = useState([]);

  // useEffect for cleanup on ObjectURL
  useEffect(() => {
    if(!previews.length) return;
    return () => {
      previews.forEach(image => {
        URL.revokeObjectURL(image.url);
      })

    }
  }, [previews]);

  // useEffect for slecting all thumbNails
  useEffect(() => {
    if(isAll) setAllClass(`${display} ${all}`)
  }, [isAll])

  let imageFiles = [];
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();


    if (imageData.length) imageFiles = [...imageData];
    const file = e.dataTransfer.files[0]

    imageFiles.push(...e.dataTransfer.files);
    // const newfiles = priorImages.concat(e.dataTransfer.files);
    // console.log('newfiles', newfiles)
    setImageData(imageFiles)
    dispatch(addThumbNails({
      url: URL.createObjectURL(e.dataTransfer.files[0]),
      name: file.name
    }));
  }


  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'copy';
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

  }

  const handleClick = (e) => {
    e.target.className = divFocus;
    setDivFocus(`${thumbContainer} ${thumbFocus}`)
    setSelected([e.target.id]);
  }

  const handleFile = (e) => {
    setFileValue(e.target.value);
  }

  return (
    <div className={wrapperContainer}>
    <UploadNav
      selected={selected}
      setSelected={setSelected}
      setIsAll={setIsAll}
      imageData={imageData}
      setImageData={setImageData} />
      <div className={previews.length > 0 ? allClass : dropZone}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop = {handleDrop}>
          {previews.length > 0 ?
            previews.map((image, idx) => (
              <div key={idx} id={image.name} className={thumbContainer} onClick={handleClick}>
                <img key={image.url} src={image.url} className={thumbNail} alt='' />
                <span key={image.name}>{image.name}</span>
              </div>)) :
              <div className='TextHolder'>
                <h2 className='title'>Drag and drop photos here</h2>
                <h2 className={or}>or</h2>
                <div className={buttonHolder}>
                  <label htmlFor='file' className={labelButton}>Choose photo from file</label>
                  <input type='file' id='file' value={fileValue} onChange={handleFile} className={uploader}></input>
                </div>
              </div>
            }
          </div>
      </div>
  )
}

export default DropPhoto;
