// frontend/src/store/photos.js

const ADD_PHOTOS = 'photos/addPhotos';

export const addPhotos = (photos) => {
  return {
    type: ADD_PHOTOS,
    payload: photos
  }
}

const initialState = []

const photosReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_PHOTOS:
      newState = [...state, action.payload]
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
