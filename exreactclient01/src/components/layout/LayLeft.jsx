import React, { useState, useEffect } from 'react';
import MemberData from '../pages/MemberData';
import LayLeftMember from './LayLeftMember';

function LayLeft() {



  return (
    <>
      <LayLeftMember />
      <MemberData />
    </>
  );
}

export default LayLeft;