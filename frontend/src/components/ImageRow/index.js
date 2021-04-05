// frontend/src/components/ImageRow/index.js
import { rowContainer, image } from './ImageRow.module.css';

function ImageRow({ row }) {

  const rowArray = Object.values(row);
  // console.log(rowArray, 'rowArray');
  let position;
  return (
    <div className={rowContainer}>
      {rowArray.length > 0 ?
        rowArray.map((image, idx) => {
          {idx > 0 ? position += image.adjWidth: position = 0}
         return (
           <div
            className={image}
            key={image.src}
            style={{
              width: image.adjWidth? image.adjWidth: image.width,
              height: image.adjHeight? image.adjHeight: image.height,
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              margin: `${2}px`
            }}></div>
        )}):
        <h2 key={'noImage'}>Image</h2>
          }
    </div>
  )
}

export default ImageRow;
