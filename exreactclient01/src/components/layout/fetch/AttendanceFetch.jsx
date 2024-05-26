import React from 'react'
import { memberState } from '../../state/memberState';
import { inTimeState } from '../../state/inTimeState';
import { useRecoilValue, useRecoilState } from 'recoil';
import axios from 'axios';

function AttendanceFetch() {

  const memberResData = useRecoilValue(memberState);
  const [memberData, setMemberData] = useRecoilState(memberState);
  const [inTimeData, setInTimeData] = useRecoilState(inTimeState);
  const attendanceInTime = new Date().toLocaleTimeString('en-GB', { hour12: false });

  const url_be = 'http://localhost:4000';

  const fetchAttendance = () => {
    axios
      (`${url_be}/attendance`,
        {
          method: 'post',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors'
          },
          data: {
            member_number: memberResData.member_number,
            in_time: attendanceInTime
          }
        })
      .then((res) => {
        if (res !== null && res !== "") {
          setMemberData({
            ...memberData,
            isAttendance: true,
          })
          setInTimeData({
            ...inTimeData,
            in_time: attendanceInTime
          })
          console.log("출석");

        } else {
          console.log("실패");

        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
  };


  console.log(memberData)
  return (
    <button onClick={fetchAttendance}>출석</button>

  )
}

export default AttendanceFetch