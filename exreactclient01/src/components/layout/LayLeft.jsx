import React, { useState, useEffect } from 'react';
import { memberState } from '../state/memberState';
import { useRecoilValue } from 'recoil';

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
          <button>출석</button>
        )}
      </div>

    </>
  );
}

export default LayLeft;