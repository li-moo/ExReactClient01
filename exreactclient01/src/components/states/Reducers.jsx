import { FETCH_MEMBER_DATA_SUCCESS, FETCH_MEMBER_DATA_FAILURE } from './ActionTypes';

const initialState = {
  memberData: null,
  error: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER_DATA_SUCCESS:
      return {
        ...state,
        memberData: action.payload,
        error: null
      };
    case FETCH_MEMBER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
