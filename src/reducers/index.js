import { GET_TRACKS, SET_TRACKS } from '../constants/actionTypes';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRACKS:
      return { ...state, loading: true };
    case SET_TRACKS:
      return { ...state, tracks: action.payload, loading: false }
    default:
      return state;
  }
};

export default reducer;
