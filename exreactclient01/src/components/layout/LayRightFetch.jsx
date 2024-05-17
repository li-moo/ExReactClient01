import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      // .then((res) => {
      //   // console.log("Member Data:", res.data);
      //   const member = res.data;

      //   console.log('member:' + member);
      //   setMemberData({
      //     ...memberData,
      //     isAttendance: true,
      //     id: member.id,
      //     name: member.name,
      //     member_number: member.member_number,
      //     car_number: member.car_number,
      //     member_img: member.member_img,
      //     isParking: false,
      //     inProgress: 
      //   })
      // })
      .then((res) => {
        const member = res.data;

        // 회원의 두 번째 멤버십 기간
        const secondMembershipPeriod = member.second_membership_period;

        // 현재 날짜와 두 번째 멤버십 기간 비교
        const currentDate = new Date();
        const todayString = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 현재 날짜 문자열 생성

        const isPastDate = secondMembershipPeriod < todayString;

        // inProgress 값 설정
        const inProgress = !isPastDate;

        console.log('member:', member);
        console.log('inProgress:', inProgress);

        setMemberData({
          ...memberData,
          isAttendance: true,
          id: member.id,
          name: member.name,
          member_number: member.member_number,
          car_number: member.car_number,
          member_img: member.member_img,
          isParking: false,
          inProgress: inProgress
        });
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
