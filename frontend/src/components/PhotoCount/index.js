// frontend/src/components/PhotCount/index.js

function PhotoCount() {
  const photoCount = 5;
  return (
    <div className='main-container'>
      <span className='count'>{`${photoCount} Photos`}</span>
    </div>
  )
}

export default PhotoCount;
