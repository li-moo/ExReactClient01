// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchMemberDataSuccess, fetchMemberDataFailure } from './Actions';
// import axios from 'axios';

// function MemberState({ inputValue }) {
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   fetch('/member')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       // 받은 데이터를 Redux 스토어에 저장하기 위해 액션을 디스패치합니다.
//   //       dispatch(fetchMemberDataSuccess(data));
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching members:', error);
//   //     });
//   // }, [dispatch]);

//   // console.log('dispatch' + dispatch);

//   //-----
//   const dispatch = useDispatch();
//   console.log('inputValue' + inputValue);
//   const url_be = 'http://localhost:4000';

//   useEffect(() => {
//     // 입력된 값의 길이가 4 이상인 경우에만 fetchMemberData 함수 실행

//     fetchMemberData();
//   }, [inputValue]);// useEffect의 의존성 배열에 clickMemberNum을 추가합니다.


//   const fetchMemberData = (memberNumber) => {
//     return (dispatch) => {
//       axios.get(`${url_be}/member`, {
//         params: {
//           member_number: memberNumber
//         }
//       })
//         .then((res) => {
//           dispatch(fetchMemberDataSuccess(res.data));
//         })
//         .catch((err) => {
//           dispatch(fetchMemberDataFailure(err));
//         });
//     };
//   };



//   console.log('dispatch' + dispatch);



//   return (
//     <div>
//       <p>{dispatch.name}</p>
//     </div>
//   );
// }

// export default MemberState;
