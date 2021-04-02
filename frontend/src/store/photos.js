// frontend/src/store/photos.js

const ADD_PHOTOS = 'photos/addPhotos';

export const addPhotos = (photos) => {
  return {
    type: ADD_PHOTOS,
    payload: photos
  };
};

const initialState = { photos: [] };

const photosReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_PHOTOS:
      newState = {...state, photos: action.payload };
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
