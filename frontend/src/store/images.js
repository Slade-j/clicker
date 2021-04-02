// frontend/src/store/photos.js

const ADD_IMAGES = 'images/add-images';

export const addImages = (images) => {
  return {
    type: ADD_PHOTOS,
    payload: images
  }
}

const postImages = (images, ownerId) => async (dispatch) => {
  const response = await fetch('/api/images', {
    method: 'POST',
    body: JSON.stringify({ images, ownerId })
  })

  const { urlArray } = await res.json();
  dispatch(addImages(urlArray));
}

const initialState = [];

const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_IMAGES:
      newState = [ ...state, ...action.payload ]
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;
