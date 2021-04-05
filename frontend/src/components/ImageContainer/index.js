// frontend/src/components/ImageContainer/index.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userPhotos } from '../../store/photos';
import ImageRow from '../ImageRow';
import { mainContainer, gallery } from './ImageContainer.module.css';

function ImageContainer() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  const [ imageObjs, setImageObjs ] = useState([]);
  const [ layout, setLayout ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);


  useEffect(() => {
    dispatch(userPhotos()).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if(!isLoaded) return;
    const imgData = photos.map((photo) => {
      const obj = {}
      const img = new Image()
      img.src = photo.photoUrl
      //  console.log(img.naturalHeight, img.naturalWidth, 'h x w')
      obj.src = photo.photoUrl
      obj.asp = Math.round((img.naturalHeight / img.naturalWidth) * 100) / 100;
      obj.height = 300;
      obj.width = Math.round(300 / obj.asp)
      obj.id = photo.id
      return obj;
    })

    setImageObjs(imgData);
  }, [isLoaded])

  useEffect(() => {
    if(imageObjs.length < 1) return;
    const maxWidth = window.innerWidth * 0.8;
    let accumlativeWidth = 0;
    const rowLayout = []
    let row = {}

    for (let i = 0; i < imageObjs.length; i++) {
      const pictureObj = imageObjs[i]

      row[i + 1] = pictureObj
      accumlativeWidth += pictureObj.width;

      if (accumlativeWidth > maxWidth){

        for (const value in row) {
          row[value].weight = row[value].width / accumlativeWidth
          row[value].adjWidth = Math.round(maxWidth * row[value].weight)
          row[value].adjHeight = Math.round(row[value].adjWidth * row[value].asp)
          row.height = row[value].adjHeight;
        }

        rowLayout.push(row);
        row = {}
        accumlativeWidth = 0;
      }
    }
    console.log(row, 'after loop')
    if (row) rowLayout.push(row);
    console.log( rowLayout, 'after if')
    setLayout(rowLayout);
    // console.log('new layout', rowLayout)
  }, [imageObjs]);


  // const img = new Image();
  // img.src = photoUrl;
  // const asp = img.height / img.width;
  // const height = 300;
  // const width = height / asp;

  return (
    <div className={mainContainer}>
      <div className={gallery}>
        {layout.length > 0 && isLoaded ?
          layout.map((row, idx) => {
            return <ImageRow key={`row${idx}`} row={row} />
          }):
          <h2 className='missing'>--Your recent images will appear here--</h2>}
      </div>
    </div>
  )
}

export default ImageContainer;
