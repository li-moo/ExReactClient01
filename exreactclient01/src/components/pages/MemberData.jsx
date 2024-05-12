import React, { useState } from 'react';

function MemberData({ memberData }) {

  // memberData를 JSON 문자열로 변환
  // const memberParsing = JSON.stringify(memberData);
  //배 열로 안오고 {} 쌓인 객체로 와서 []로 배열로 만들어준다.
  const memberArray = [memberData];

  // console.log('---memberArray', memberArray);
  // JSON 문자열을 다시 파싱하여 배열로 변환
  // const memberJson = JSON.parse(memberParsing);

  const [isOpen, setIsOpen] = useState(!!memberData);

  const closeModal = () => {
    setIsOpen(false);
  };



  return (
    <>
      <div>멤버데이터</div>
      {/* memberArray && memberArray.map 가 있을떄만 */}
      {memberArray && memberArray.map((member) => (
        <div key={member && member.id}>
          <p>name: {member && member.name}</p>
          <p>지발</p>
        </div>
      ))}
      <p>떠야하는거 아닌가?</p>
    </>

  );
}

export default MemberData;
