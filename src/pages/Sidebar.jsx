import React, { useState } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`sidebar ${opened ? 'opened' : ''}`}>
        <div className='sidebar-top'>
            <button className="toggle-btn" onClick={() => setOpened(!opened)}>
                {opened ? '←' : '☰'}
            </button>            
        </div>
        

      {/* 펼쳐졌을 때만 보이는 영역 */}
      {opened && (
        <div className="sidebar-main">
          <div className="sidebar-mid">
            <div className="nickname">nickname</div>
            <button className="sidebar-btn">Profile</button>
            <button className="sidebar-btn">My Sheets</button>
          </div>
          <div className="sidebar-bottom">
            <div className='bottom-left'>
                <button className="logout">🔄 LogOut</button>
            </div>
            <div className='bottom-right'>
                <div className="icon">ℹ️</div>
                <div className="icon">⚙️</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
