import axios from 'axios';
import { FETCH_MEMBER_DATA_SUCCESS, FETCH_MEMBER_DATA_FAILURE } from './ActionTypes';

const url_be = 'http://localhost:4000';

export const fetchMemberData = (memberNumber) => {
  return (dispatch) => {
    axios.get(`${url_be}/member`, {
      params: {
        member_number: memberNumber
      }
    })
      .then((res) => {
        dispatch(fetchMemberDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchMemberDataFailure(err));
      });
  };
};

export const fetchMemberDataSuccess = (data) => {
  return {
    type: FETCH_MEMBER_DATA_SUCCESS,
    payload: data
  };
};

const fetchMemberDataFailure = (error) => {
  return {
    type: FETCH_MEMBER_DATA_FAILURE,
    payload: error
  };
};

// export { fetchMemberData, fetchMemberDataSuccess }; // 명시적인 내보내기 추가
