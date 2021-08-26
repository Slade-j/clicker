// frontend/src/store/thumbNails.js

const ADD_THUMBNAILS = 'thumbNails/addThumbNails';
const CLEAR_THUMBNAILS = 'thumbNails/clearThumbNails';
const REMOVE_THUMBNAIL = 'thumbNails/removeThumNail';

export const addThumbNails = (thumbNails) => ({
  type: ADD_THUMBNAILS,
  payload: thumbNails
});

export const clearThumbNails = () => ({
  type: CLEAR_THUMBNAILS
});

export const removeThumbNail = (name) => ({
  type: REMOVE_THUMBNAIL,
  payload: name
});

// Reducer helper function
const spliceThumbNail = (thumbNails, selected) => {


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
    case REMOVE_THUMBNAIL:
      return spliceThumbNail(state, action.payload);
    default:
      return state;
  }
};

export default thumbNailsReducer;
