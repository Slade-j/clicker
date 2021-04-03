// frontend/src/store/thumbNails.js

const ADD_THUMBNAILS = 'thumbNails/addThumbNails';
const CLEAR_THUMBNAILS = 'thumbNails/clearThumbNails';

export const addThumbNails = (thumbNails) => {
  return {
    type: ADD_THUMBNAILS,
    payload: thumbNails
  };
};

export const clearThumbNails = () => {
  return { type: CLEAR_THUMBNAILS }
}

const initialState = [];

const thumbNailsReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_THUMBNAILS:
      newState = [...state, action.payload ]
      return newState;
    case CLEAR_THUMBNAILS:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default thumbNailsReducer;
