import React from 'react'
import { useRecoilValue } from 'recoil';
import { inTimeState } from '../../state/inTimeState';
import { memberState } from '../../state/memberState';
import axios from 'axios';

function ParkingFetch() {
  const memberResData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);

  const parkingOutTime = new Date().toLocaleTimeString('en-GB', { hour12: false });

  const getTime = (start, end, spareMinutes) => {

    /*const time = "21:15:34";
const parts = time.split(':');
console.log(parts); // 출력: ["21", "15", "34"] */
    //.map(Number): Number함수 숫자형 문자열을 실제 숫자로 변환(반환)
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    // 시간을 분단뒤고 정의
    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;

    if (endTotalMinutes < startTotalMinutes) {
      endTotalMinutes += 24 * 60; // 24시를 넘기는 시간 처리
    }

    let totalMinutes = endTotalMinutes - startTotalMinutes;
    totalMinutes += spareMinutes; // 20분 추가

    // Math.floor 소수점을 버리고 정수 부분만 반환 -> 시간 계산
    const hours = Math.floor(totalMinutes / 60);
    // 나눈 후 남는 값을 반환 -> 분 계산
    const minutes = totalMinutes % 60;

    //String() 문자열로 반환
    //padStart(2, '0'): 변환된 문자열이 두 자리(2) 수가 되도록 앞에 '0'을 추가
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  };

  const parkingTime = getTime(inTimeData.in_time, parkingOutTime, 20);

  // fetch
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
          console.log("주차등록");
        } else {
          console.log("주차등록실패");
        }
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
      <button onClick={fetchParkingData}>퇴장</button>
    </div>
  );
}

export default ParkingFetch;