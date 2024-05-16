import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayLeft from './LayLeft';
import MemberData from '../pages/MemberData';
import { memberState } from '../state/memberState';
import { memberNumberState } from '../state/memberNumberState';
import { useRecoilState, useRecoilValueLoadable, useRecoilValue } from 'recoil';

export function LayRightFetch({ inputValue }) {
  const [memberData, setMemberData] = useRecoilState(memberState);
  const memberNumberData = useRecoilValue(memberNumberState);

  // const initialMemberDataLoadable = useRecoilValueLoadable(memberState);
  // useEffect(() => {
  //   if (initialMemberDataLoadable.state === 'hasValue' && initialMemberDataLoadable.contents === null) {
  //     setMemberData(null);
  //   }
  // }, [initialMemberDataLoadable.state, initialMemberDataLoadable.contents, setMemberData]);

  console.log('memberNumberData:::', memberNumberData)

  useEffect(() => {
    if (inputValue.length >= 4) {
      fetchMemberData();
    }
    if (inputValue.length === 3) {
      setMemberData({}); // inputValue의 길이가 3일 때, 빈 객체로 Recoil 상태를 업데이트
    }
  }, [inputValue, setMemberData]);


  const url_be = 'http://localhost:4000';

  const fetchMemberData = () => {

    const memberNumber = memberNumberData;
    console.log('fetch안--', memberNumberData);
    axios.get(`${url_be}/member`, {
      params: {
        member_number: memberNumber
      }
    })
      .then((res) => {
        // console.log("Member Data:", res.data);
        const member = res.data;
        console.log('member:' + member);
        setMemberData({
          ...memberData,
          isAttendance: true,
          id: member.id,
          name: member.name,
          member_number: member.member_number,
          car_number: member.car_number,
          member_img: member.member_img,
          isParking: false
        })
      })
      .catch((err) => {
        console.log("member data 오류:", err);
        setMemberData({});
      })
  };

  return (
    <div>

    </div>

  );
}

export default LayRightFetch;
