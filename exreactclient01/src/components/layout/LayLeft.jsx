import React, { useState, useEffect } from 'react';
import MemberData from '../pages/MemberData';
import LayLeftMember from './LayLeftMember';
import MemberState from '../states/MemberState';
import ReduxFetch from '../pages/ReduxFetch';

function LayLeft() {



  return (
    <>
      {/* <LayLeftMember />
      <MemberData /> */}
      <MemberState />
      <ReduxFetch />
    </>
  );
}

export default LayLeft;