import React, { useEffect } from 'react';
import LayLeft from '../layout/LayLeft';

function memberData({ memberData }) {

  const memberParsing = JSON.stringify(memberData)

  console.log('memberData' + memberData);
  console.log('JSON.stringify_memberData' + JSON.stringify(memberData));
  console.log('JSON.memberParsing' + memberParsing);


  // useEffect(() => {

  // }, [memberParsing]);

  return (
    <>
      <div>멤버데이터</div>
      {/* <LayLeft memberParsing={memberParsing} /> */}
    </>
  );
}

export default memberData;