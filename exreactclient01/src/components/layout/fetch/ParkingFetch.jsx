// import React, { useEffect } from 'react'
// import { useRecoilValue, useRecoilState } from 'recoil';
// import { inTimeState } from '../../state/inTimeState';
// import { memberState } from '../../state/memberState';
// import axios from 'axios';

// function ParkingFetch() {
//   const memberResData = useRecoilValue(memberState);
//   const inTimeData = useRecoilValue(inTimeState);
//   const [resInTimeState, setResInTimeState] = useRecoilState(inTimeState);
//   const [resMemberResData, setResMemberResData] = useRecoilState(inTimeState);

//   const parkingOutTime = new Date().toLocaleTimeString('en-GB', { hour12: false });

//   const getTime = (start, end, spareMinutes) => {

//     /*const time = "21:15:34";
// const parts = time.split(':');
// console.log(parts); // 출력: ["21", "15", "34"] */
//     //.map(Number): Number함수 숫자형 문자열을 실제 숫자로 변환(반환)
//     const [startHours, startMinutes] = start.split(':').map(Number);
//     const [endHours, endMinutes] = end.split(':').map(Number);

//     // 시간을 분단뒤고 정의
//     let startTotalMinutes = startHours * 60 + startMinutes;
//     let endTotalMinutes = endHours * 60 + endMinutes;

//     if (endTotalMinutes < startTotalMinutes) {
//       endTotalMinutes += 24 * 60; // 24시를 넘기는 시간 처리
//     }

//     let totalMinutes = endTotalMinutes - startTotalMinutes;
//     totalMinutes += spareMinutes; // 20분 추가

//     // Math.floor 소수점을 버리고 정수 부분만 반환 -> 시간 계산
//     const hours = Math.floor(totalMinutes / 60);
//     // 나눈 후 남는 값을 반환 -> 분 계산
//     const minutes = totalMinutes % 60;

//     //String() 문자열로 반환
//     //padStart(2, '0'): 변환된 문자열이 두 자리(2) 수가 되도록 앞에 '0'을 추가
//     return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
//   };

//   const parkingTime = getTime(inTimeData.in_time, parkingOutTime, 20);

//   useEffect(() => {
//     if (resInTimeState.isRegister) {
//       alert("안녕히가세요");
//       // memberResData와 inTimeData를 빈 객체로 초기화
//     }
//   }, [resInTimeState.isRegister, setResInTimeState, setResMemberResData]);

//   // fetch
//   const url_be = 'http://localhost:4000';
//   const fetchParkingData = () => {
//     console.log('inTimeData', inTimeData);
//     console.log('parkingOutTime', parkingOutTime);
//     console.log('parkingTime', parkingTime);

//     axios.post(`${url_be}/parking`, {
//       member_number: memberResData.member_number,
//       car_number: memberResData.car_number,
//       out_time: parkingOutTime,
//       parking_time: parkingTime
//     }, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         withCredentials: true,
//         mode: 'no-cors'
//       }
//     })
//       .then((res) => {
//         if (res !== null && res !== "") {
//           setResInTimeState({
//             ...resInTimeState,
//             isRegister: true
//           })
//           console.log("주차등록");
//         } else {
//           console.log("주차등록실패");
//         }
//       })
//       .then(() => {
//         setResMemberResData({});
//         setResInTimeState({});
//       })
//       .catch(function (error) {
//         if (error.response) {
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   };

//   const fetchExitData = () => {

//     axios.post(`${url_be}/exit`, {
//       member_number: memberResData.member_number,
//       // car_number: memberResData.car_number,
//       out_time: parkingOutTime,
//       parking_time: parkingTime
//     }, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         withCredentials: true,
//         mode: 'no-cors'
//       }
//     })
//       .then((res) => {
//         if (res !== null && res !== "") {
//           setResInTimeState({
//             ...resInTimeState,
//             isRegister: true
//           })
//           console.log("주차등록");
//         } else {
//           console.log("주차등록실패");
//         }
//       })
//       .then(() => {
//         setResMemberResData({});
//         setResInTimeState({});
//       })
//       .catch(function (error) {
//         if (error.response) {
//           console.log(error.response.data);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   };


//   return (
//     <div>
//       {memberResData && memberResData.car_number ? (
//         <button onClick={fetchParkingData}>주차</button>
//       ) : (
//         <button onClick={fetchExitData}>퇴실</button>
//       )}
//     </div>
//   );
// }

// export default ParkingFetch;

import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { inTimeState } from '../../state/inTimeState';
import { memberState } from '../../state/memberState';
import axios from 'axios';

function ParkingFetch() {
  const memberResData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);
  const [resInTimeState, setResInTimeState] = useRecoilState(inTimeState);
  const [resMemberResData, setResMemberResData] = useRecoilState(inTimeState);

  const parkingOutTime = new Date().toLocaleTimeString('en-GB', { hour12: false });

  const getTime = (start, end, spareMinutes) => {
    if (!start || !end) {
      console.error('Invalid start or end time');
      return '00:00:00'; // 기본 값 반환
    }

    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;

    if (endTotalMinutes < startTotalMinutes) {
      endTotalMinutes += 24 * 60; // 24시를 넘기는 시간 처리
    }

    let totalMinutes = endTotalMinutes - startTotalMinutes;
    totalMinutes += spareMinutes;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  };

  const parkingTime = inTimeData && inTimeData.in_time ? getTime(inTimeData.in_time, parkingOutTime, 20) : '00:20:00';

  useEffect(() => {
    if (resInTimeState && resInTimeState.isRegister) {
      alert("안녕히가세요");
    }
  }, [resInTimeState, setResInTimeState, setResMemberResData]);

  const url_be = 'http://localhost:4000';
  const fetchParkingData = () => {
    console.log('inTimeData', inTimeData);
    console.log('parkingOutTime', parkingOutTime);
    console.log('parkingTime', parkingTime);

    axios.post(`${url_be}/parking`, {
      member_number: memberResData.member_number,
      car_number: memberResData.car_number,
      out_time: parkingOutTime,
      parking_time: parkingTime
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        withCredentials: true,
        mode: 'no-cors'
      }
    })
      .then((res) => {
        if (res !== null && res !== "") {
          setResInTimeState({
            ...resInTimeState,
            isRegister: true
          });
          console.log("주차등록");
          window.location.reload();
        } else {
          console.log("주차등록실패");
          alert("다시 시도해주세요");
          window.location.reload();
        }
      })
      .then(() => {
        setResMemberResData({});
        setResInTimeState({});
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const fetchExitData = () => {
    axios.post(`${url_be}/exit`, {
      member_number: memberResData.member_number,
      out_time: parkingOutTime,
      parking_time: parkingTime
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        withCredentials: true,
        mode: 'no-cors'
      }
    })
      .then((res) => {
        if (res !== null && res !== "") {
          setResInTimeState({
            ...resInTimeState,
            isRegister: true
          });
          console.log("퇴실");
          window.location.reload();
        } else {
          console.log("퇴실실패");
          alert("다시 시도해주세요");
          window.location.reload();
        }
      })
      .then(() => {
        setResMemberResData({});
        setResInTimeState({});
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      {memberResData && memberResData.car_number ? (
        <button onClick={fetchParkingData}>주차</button>
      ) : (
        <button onClick={fetchExitData}>퇴실</button>
      )}
    </div>
  );
}

export default ParkingFetch;
