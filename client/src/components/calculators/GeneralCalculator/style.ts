import styled from 'styled-components';
import * as S from '../../../style';

/* styled-components */
export const CalBody = styled.div`
  ${S.alignments.center}
  flex-direction: column;
  margin: 50% auto;
  padding: 25px;
  width: 80%;
  border-radius: 20px;
  background-color: ${S.colors.black};
  text-align: center;
`;

export const CalInputArea = styled.div`
  box-sizing: border-box;
  ${S.alignments.flexEnd}
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 15px;
  padding-right: 20px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: ${S.colors.lightBlack};
  color: ${S.colors.white};
`;

export const PreviousNumberDiv = styled.div`
  opacity: 0.7;
`;

export const CurrentNumberDiv = styled.div`
  font-size: 24px;
`;

export const TotalNumberDiv = styled.div`
  font-size: 24px;
  color: ${S.colors.beige};
`;

export const CalHistoryDiv = styled.div`
  ${S.alignments.spaceBetween}
  justify-content: space-around;
  box-sizing: border-box;
  position: absolute;
  left: 10%;
  z-index: 999;
  padding: 10px 20px 0 20px;
  width: 312px;
  height: 110px;
  border-radius: 10px;
  background-color: ${S.colors.lightBlack};
`;

export const CalHistoryList = styled.ul`
  ${S.alignments.center}
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  li {
    margin-right: 3px;
    opacity: 0.3;
    list-style: none;
  }
  li:last-child {
    opacity: 0.7;
  }
`;

export const CalControlButtonArea = styled.div`
  ${S.alignments.center}
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid ${S.colors.blue};
  border-bottom: 1px solid ${S.colors.blue};
  background-color: ${S.colors.black};
`;

export const CalControlButton = styled.button`
  border: none;
  background: none;
  color: ${S.colors.blue};
  font-size: 24px;
`;

export const CalButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  width: 100%;
  padding-top: 15px;
`;

export const CalButton = styled.button`
  margin: 4px;
  border: none;
  border-radius: 10px;
  background-color: ${S.colors.lightBlack};
  color: ${S.colors.blue};
  font-size: 20px;
`;

export const CalMsgDiv = styled.div`
  margin-top: 15px;
  color: ${S.colors.red};
`;

/* styles */
export const controlButtonStyle = {};

export const clearButtonStyle = {
  gridColumn: '1/3',
  gridRow: '1',
  color: `${S.colors.red}`,
};

export const evaluateButtonStyle = {
  gridColumn: '3/5',
  gridRow: '5',
  color: `${S.colors.beige}`,
};

export const operationButtonStyle = {
  color: `${S.colors.beige}`,
};
