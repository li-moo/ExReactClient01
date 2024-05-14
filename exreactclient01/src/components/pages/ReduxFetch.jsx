// 수정된 컴포넌트 파일
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMemberData } from '../states/Actions';

const ReduxFetch = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.inputValue); // Redux 상태에서 inputValue 가져오기

  useEffect(() => {
    if (inputValue && inputValue.length >= 4) {
      dispatch(fetchMemberData(inputValue)); // 액션 디스패치
    }
  }, [inputValue, dispatch]);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default ReduxFetch;
