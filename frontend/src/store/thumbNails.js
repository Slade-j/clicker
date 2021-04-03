// frontend/src/store/thumbNails.js

const ADD_THUMBNAILS = 'thumbNails/addThumbNails';

export const addThumbNails = (thumbNails) => {
  return {
    type: ADD_THUMBNAILS,
    payload: thumbNails
  };
};

const initialState = [];

const thumbNailsReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_THUMBNAILS:
      newState = [...state, action.payload ]
      return newState;
    default:
      return state;
  }
};

export default thumbNailsReducer;
