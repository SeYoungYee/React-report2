import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* 헤더 */}
      <section>
        <div className='header'>
          <div>
            <label>날짜</label>
            <input type="date" />
          </div>

          <div>
            <label>항목</label>
            <input type="text" placeholder='지출 항목' />
          </div>

          <div>
            <label>금액</label>
            <input type="text" placeholder='지출 금액' />
          </div>

          <div>
            <label>내용</label>
            <input type="text" placeholder='지출 내용' />
          </div>

          <button className='submit_btn' type="submit">저장</button>
        </div>
      </section>
      {/* 버튼 */}
      <section>
        <div className='btns'>
          <button>1월</button>
          <button>2월</button>
          <button>3월</button>
          <button>4월</button>
          <button>5월</button>
          <button>6월</button>
          <button>7월</button>
          <button>8월</button>
          <button>9월</button>
          <button>10월</button>
          <button>11월</button>
          <button>12월</button>
        </div>
      </section>

      <div className='content'></div>
    </>
  );
}

export default App;
