import React from 'react';
import LayLeft from './LayLeft';
import LayRight from './LayRight';
import style from "./LayMain.module.css";


function LayMain() {
  return (
    <div className={style.layoutFlex}>
      <div className={style.layLeftStyle}>
        <LayLeft />
      </div>
      <div className={style.layRightStyle}>
        <LayRight />
      </div>
    </div>
  )
}

export default LayMain;
