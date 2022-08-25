import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineTimer } from 'react-icons/md';

export const GeneralCal = () => {
  const colors = {
    blue: '#adbae8',
    red: '#cd3e38',
    beige: '#daaaa1',
    black: '#010101',
    lightBlack: '#171717',
  };

  const styleAlignCenter =
    'display: flex; align-items: center; justify-content: center;';

  const CalBody = styled.div`
    ${styleAlignCenter}
    flex-direction: column;
    margin: 0 auto;
    width: 250px;
  `;

  const CalControlButtonArea = styled.div`
    ${styleAlignCenter}
    justify-content: space-around;
    width: 100%;
    background-color: ${colors.black};
    color: ${colors.blue};
  `;

  const CalControlButton = styled.button`
    border: none;
    background: none;
    color: white;
  `;

  const CalButtonArea = styled.div`
    ${styleAlignCenter}
    flex-direction: column;
    padding: 15px 0;
    width: 100%;
    background-color: ${colors.black};
  `;

  const CalButtonRow = styled.div``;

  const CalButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 2px;
    border: none;
    border-radius: 100%;
    background-color: ${colors.lightBlack};
    color: ${colors.blue};
    font-size: 20px;
  `;

  return (
    <CalBody>
      <div>input 영역</div>
      <CalControlButtonArea>
        <CalControlButton>
          <MdOutlineTimer />
        </CalControlButton>
        <CalControlButton>지우기 아이콘</CalControlButton>
      </CalControlButtonArea>
      <CalButtonArea>
        <div>
          <CalButton style={{ color: `${colors.red}` }}>C</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>()</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>%</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>÷</CalButton>
        </div>
        <div>
          <CalButton>7</CalButton>
          <CalButton>8</CalButton>
          <CalButton>9</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>×</CalButton>
        </div>
        <div>
          <CalButton>4</CalButton>
          <CalButton>5</CalButton>
          <CalButton>6</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>－</CalButton>
        </div>
        <div>
          <CalButton>1</CalButton>
          <CalButton>2</CalButton>
          <CalButton>3</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>＋</CalButton>
        </div>
        <div>
          <CalButton>+/-</CalButton>
          <CalButton>0</CalButton>
          <CalButton>.</CalButton>
          <CalButton style={{ color: `${colors.beige}` }}>＝</CalButton>
        </div>
      </CalButtonArea>
    </CalBody>
  );
};
