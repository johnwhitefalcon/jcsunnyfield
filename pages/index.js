

import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

export default function pg4() {
  return (
    <div className="text-white font-extrabold h-screen justify-center items-center bg-black flex">
      <div className="text-6xl fixed z-10 ml-[15rem] mt-[-10rem] w-[80rem]">
        Disability Sector Workforce Analysis
      </div>

      <div className="text-3xl fixed z-10 ml-[-50rem] mt-[-30rem] w-[20rem]">
        <img src="https://b2504970.smushcdn.com/2504970/wp-content/uploads/sunnyfield-disability-services-logo.png?lossy=0&strip=1&webp=1" />
      </div>

      <div className="text-3xl fixed z-10 ml-[51rem] mt-[-30rem] w-[20rem]">
        <img src="https://alliance20.org.au/wp-content/uploads/2018/06/alliance_20_logo.png" />
      </div>

      <div className="fixed z-10 ml-[-59rem] mt-[0rem]">

  <Button type="primary" onClick={()=>(window.location.href='https://www.surveymonkey.com/r/87SH7WB')}>Go To Survey</Button>

      </div>
    </div>
  );
}