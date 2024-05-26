import React, { useState, useEffect } from 'react';
import { memberState } from '../state/memberState';
import { useRecoilValue } from 'recoil';
import AttendanceFetch from './fetch/AttendanceFetch';
import ParkingFetch from './fetch/ParkingFetch';

function LayLeft() {

  const memberData = useRecoilValue(memberState);

  useEffect(() => {

  }, [memberData])

  console.log(memberData)



  return (
    <>
      <p>{memberData.name}</p>
      <div>
        {memberData && Object.keys(memberData).length !== 0 && (
          <AttendanceFetch />
        )}
        <ParkingFetch />
      </div>


    </>
  );
}

export default LayLeft;