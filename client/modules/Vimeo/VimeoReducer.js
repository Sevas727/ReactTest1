import { GET_DATA } from './VimeoActions';

// Initial State
const initialState = { videos: [] };

const VimeoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA :
      return {
          videos: action.videos,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
//export const getData = state => state.data;

// Export Reducer
export default VimeoReducer;
