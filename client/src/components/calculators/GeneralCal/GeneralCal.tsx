import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const GeneralCal = () => {
  const CalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 250px;
  `;

  const CalControlButtonArea = styled.div`
    width: 100%;
    background-color: #010101;
    color: #adbae8;
  `;

  const CalButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 0;
    width: 100%;
    background-color: #010101;
  `;

  const CalButtonRow = styled.div``;

  const CalButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 2px;
    border: none;
    border-radius: 100%;
    background-color: #171717;
    color: #adbae8;
    font-size: 20px;
  `;

  return (
    <CalBody>
      <div>input 영역</div>
      <CalControlButtonArea>control btns 영역</CalControlButtonArea>
      <CalButtonArea>
        <div>
          <CalButton style={{ color: '#cd3e38' }}>C</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>()</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>%</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>÷</CalButton>
        </div>
        <div>
          <CalButton>7</CalButton>
          <CalButton>8</CalButton>
          <CalButton>9</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>×</CalButton>
        </div>
        <div>
          <CalButton>4</CalButton>
          <CalButton>5</CalButton>
          <CalButton>6</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>－</CalButton>
        </div>
        <div>
          <CalButton>1</CalButton>
          <CalButton>2</CalButton>
          <CalButton>3</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>＋</CalButton>
        </div>
        <div>
          <CalButton>+/-</CalButton>
          <CalButton>0</CalButton>
          <CalButton>.</CalButton>
          <CalButton style={{ color: '#daaaa1' }}>＝</CalButton>
        </div>
      </CalButtonArea>
    </CalBody>
  );
};
