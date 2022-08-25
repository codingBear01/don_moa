import styled from 'styled-components';
import * as S from '../../';

export const CalBody = styled.div`
  ${S.StyleAligns.styleAlignCenter}
  flex-direction: column;
  margin: 0 auto;
  width: 250px;
`;

export const CalInputArea = styled.div`
  ${S.StyleAligns.styleAlignCenter}
  justify-content: flex-end;
  width: 100%;
  height: 200px;
  background-color: ${S.GeneralCalColors.black};
`;

export const CalControlButtonArea = styled.div`
  ${S.StyleAligns.styleAlignCenter}
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid ${S.GeneralCalColors.blue};
  border-bottom: 1px solid ${S.GeneralCalColors.blue};
  background-color: ${S.GeneralCalColors.black};
  color: ${S.GeneralCalColors.blue};
`;

export const CalControlButton = styled.button`
  border: none;
  background: none;
  color: white;
`;

export const CalButtonArea = styled.div`
  ${S.StyleAligns.styleAlignCenter}
  flex-direction: column;
  padding: 15px 0;
  width: 100%;
  background-color: ${S.GeneralCalColors.black};
`;

export const CalButtonRow = styled.div``;

export const CalButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 2px;
  border: none;
  border-radius: 100%;
  background-color: ${S.GeneralCalColors.lightBlack};
  color: ${S.GeneralCalColors.blue};
  font-size: 20px;
`;
