import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MemberData from '../pages/MemberData';
import MemberState from '../states/MemberState';
// MemberKeypad는 주석 처리되어 있으므로 필요 없는 import문은 삭제합니다.

function LayRightFetch({ inputValue }) {

  // console.log('1clickMemberNum' + inputValue);
  // console.log('clickMemberNum.inputValue' + clickMemberNum.inputValue);
  // useEffect(() => {
  //   // 함수 호출 시 괄호를 사용하지 않고 변수를 참조합니다.
  //   console.log("inputValue이 변경되었습니다.");
  //   // readMemberNum 함수는 여기서 호출하지 않습니다.
  //   fetchMemberData();

  // }, [inputValue]); // useEffect의 의존성 배열에 clickMemberNum을 추가합니다.

  useEffect(() => {
    // 입력된 값의 길이가 4 이상인 경우에만 fetchMemberData 함수 실행
    console.log('------------LayRignt')
    if (inputValue.length >= 4) {

      console.log('-----------fetchMemberData-----------')
      fetchMemberData();
    }
  }, [inputValue]);// useEffect의 의존성 배열에 clickMemberNum을 추가합니다.


  const [memberData, setMemberData] = useState(null);
  const url_be = 'http://localhost:4000';

  const fetchMemberData = () => {
    // member_number 값을 지정하여 `/member` 엔드포인트에서 데이터 가져오기
    const memberNumber = inputValue; // 예시로 123 사용. 실제로는 원하는 값을 넣어야 함
    console.log('fetch안--', memberNumber);
    axios.get(`${url_be}/member`, {
      params: {
        // member_number: memberNumber
        member_number: memberNumber
      }
    })
      .then((res) => {
        console.log("Member Data:", res.data);

        setMemberData(res.data);
      })
      .catch((err) => console.log("member data 오류:", err));
  };



  return (
    <div>
      <MemberData memberData={memberData} />
      <MemberState memberData={memberData} />
    </div>

  );
}

export default LayRightFetch;
