import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css'

const Header = styled.div`
  background-color: white;
  width: 1200px;
  border-radius: 10px;
  margin: 0px 50px 50px 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  margin-bottom: 30px;
`;

const Btns = styled.div`
  background-color: white;
  width: 1200px;
  border-radius: 10px;
  margin: 0px 50px 50px 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: antiquewhite;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: aqua;
  }
`;

const SubmitButton = styled(Button)`
  background-color: antiquewhite;
`;

const Label = styled.label`
  margin: 15px;
`;

function App() {
  return (
    <>
      {/* 헤더 */}
      <Header>
        <div>
          <Label>날짜</Label>
          <input type="date" />
        </div>

        <div>
          <Label>항목</Label>
          <input type="text" placeholder='지출 항목' />
        </div>

        <div>
          <Label>금액</Label>
          <input type="text" placeholder='지출 금액' />
        </div>

        <div>
          <Label>내용</Label>
          <input type="text" placeholder='지출 내용' />
        </div>

        <SubmitButton type="submit">저장</SubmitButton>
      </Header>
      {/* 버튼 */}
      <section>
        <Btns>
          <Button>1월</Button>
          <Button>2월</Button>
          <Button>3월</Button>
          <Button>4월</Button>
          <Button>5월</Button>
          <Button>6월</Button>
          <Button>7월</Button>
          <Button>8월</Button>
          <Button>9월</Button>
          <Button>10월</Button>
          <Button>11월</Button>
          <Button>12월</Button>
        </Btns>
      </section>

      <div className='content'></div>
    </>
  );
}

export default App;
