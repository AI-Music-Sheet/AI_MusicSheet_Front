import React from 'react';
import '../styles/mainscreen.css';

function Mainscreen() {
  return (
    <div className='mainscreen'>
      <div className="content">
        <div className='title'>
          <h1>A Big Title</h1>
        </div>
        <div className='body'>
          <div className='body-left'>
            <p className='body-text'>설명 텍스트가 들어갑니다. 여러 문단의 더미 텍스트도 넣을 수 있어요.</p>
          </div>
          <div className='body-right'>
            <div className="body-sample">대중 출력결과 샘플</div>
            <button className="start-btn">Start</button>
          </div>
        </div>
      </div>
    </div>
    
  );  
}

export default Mainscreen;
