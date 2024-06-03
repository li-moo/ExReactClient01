import React, { useState, useEffect } from 'react';
import { memberState } from '../state/memberState';
import { inTimeState } from '../state/inTimeState';
import { useRecoilValue } from 'recoil';
import AttendanceFetch from './fetch/AttendanceFetch';
import ParkingFetch from './fetch/ParkingFetch';

function LayLeft() {

  const memberData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);

  useEffect(() => {
    // console.log('－memberData.isAttendance:', memberData.isAttendance)
    // console.log('－memberData.isAttendance:', memberData ? memberData.isAttendance : 'undefined');
    // console.log('－memberData 조건:', memberData && Object.keys(memberData).length !== 0 && memberData !== undefined);


  }, [memberData])



  return (
    <>
      <p>{memberData ? memberData.name : null}</p>
      <p>{memberData ? memberData.member_number : null}</p>
      <div>
        {memberData && !memberData.isAttendance && memberData.member_number && memberData.member_number.length >= 4 && <AttendanceFetch />}
        {memberData && !inTimeData.isRegister && memberData.member_number && memberData.member_number.length >= 4 && <ParkingFetch />}

      </div>
    </>
  );
}

export default LayLeft;