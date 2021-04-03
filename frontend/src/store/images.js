// frontend/src/store/photos.js
import { csrfFetch } from './csrf';
import { clearThumbNails } from './thumbNails';

const ADD_IMAGES = 'images/add-images';

export const addImages = (images) => {
  return {
    type: ADD_IMAGES,
    payload: images
  }
}

// posting images to aws and returned url to database
export const postImages = (images, ownerId) => async (dispatch) => {
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]);
  }
  formData.append('ownerId', ownerId);
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    body: formData,
    headers: { "Content-Type": "multipart/form-data" }
  })

  const urlArray = await response.json();
  dispatch(clearThumbNails());
}

const initialState = { images: [] };

const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_IMAGES:
      newState = Object.assign({}, state)
      newState.images = [ ...state.images, action.payload ];
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;
