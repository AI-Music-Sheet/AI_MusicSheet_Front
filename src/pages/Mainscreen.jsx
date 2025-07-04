import React from 'react';
import '../styles/mainscreen.css';

function Mainscreen() {
  return (
    <div className="content">
        <h1>A Big Title</h1>
        <p>설명 텍스트가 들어갑니다. 여러 문단의 더미 텍스트도 넣을 수 있어요.</p>
        <div className="sample-box">대중 출력결과 샘플</div>
        <button className="start-btn">Start</button>
    </div>
  );
}

export default Mainscreen;
