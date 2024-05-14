import React, { useEffect, useState } from 'react';
import style from './MemberKeypad.module.css';
import LayRightFetch from '../layout/LayRightFetch';
import Actions from '../states/Actions';
import { fetchMemberData, fetchMemberDataSuccess } from '../states/Actions';


const MemberKeypad = () => {
  const [inputValue, setInputValue] = useState(''); // 현재 입력된 숫자를 저장하는 상태

  // 버튼 클릭 핸들러
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'C') {
      setInputValue(''); // Clear 버튼 클릭 시 숫자를 초기화
    } else if (buttonValue === '-') {
      setInputValue(inputValue.slice(0, -1)); // '-' 버튼 클릭 시 마지막 문자 제거
    } else {
      setInputValue(inputValue + buttonValue); // 숫자 버튼 클릭 시 현재 입력된 숫자에 숫자를 추가
    }
  };

  // if (inputValue.length >= 4) {

  //   useEffect(() => {

  //   })
  // }



  return (
    <>
      {/* 클릭된 버튼의 숫자를 표시하는 창 */}
      <div className={style.numberBox}>
        {inputValue}
      </div>
      <div className={style.keypad}>
        <div className={style.flexKeypad}>
          {/* 1부터 3까지의 버튼 */}
          {[1, 2, 3].map((buttonValue) => (
            <button
              key={buttonValue}
              className={style.button}
              onClick={() => handleButtonClick(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
        </div>
        <div className={style.flexKeypad}>
          {/* 4부터 6까지의 버튼 */}
          {[4, 5, 6].map((buttonValue) => (
            <button
              key={buttonValue}
              className={style.button}
              onClick={() => handleButtonClick(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
        </div>
        <div>
          {/* 7부터 9까지의 버튼 */}
          {[7, 8, 9].map((buttonValue) => (
            <button
              key={buttonValue}
              className={style.button}
              onClick={() => handleButtonClick(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
        </div>
        <div className={style.flexKeypad}>
          {/* C, 0, - 버튼 */}
          {['C', 0, '-'].map((buttonValue) => (
            <button
              key={buttonValue}
              className={style.button}
              onClick={() => handleButtonClick(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
        </div>
      </div >
      {/* <LayRightFetch {...inputValue} /> */}
      <LayRightFetch inputValue={inputValue} />
      {/* <MemberState inputValue={inputValue} /> */}
      <Actions inputValue={inputValue} />

    </>
  );
}

export default MemberKeypad;