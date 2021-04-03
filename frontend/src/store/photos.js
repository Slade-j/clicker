// frontend/src/store/photos.js
import { csrfFetch } from './csrf';

const ADD_PHOTOS = 'photos/addPhotos';

export const addPhotos = (photos) => {
  return {
    type: ADD_PHOTOS,
    payload: photos
  }
}

// geting all photos for current user
export const userPhotos = () => async (dispatch) => {
  const response = await csrfFetch('/api/images');
  const photos = await response.json();
  dispatch(addPhotos(photos.photos))
}

const initialState = []

const photosReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_PHOTOS:
      newState = [...state, ...action.payload]
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
