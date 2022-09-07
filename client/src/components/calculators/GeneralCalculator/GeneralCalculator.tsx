import React, { useState } from 'react';
import * as S from './style';
import { MdOutlineTimer } from 'react-icons/md';
import { BsBackspace } from 'react-icons/bs';
import { messages } from '../../../messages';

interface CalHistoriesProps {
  id: number;
  prevNum: string | number | undefined;
  operation: string;
  midNum: string;
  totalNum: string | number | undefined;
}

const GeneralCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState<
    string | number | undefined
  >('');
  const [middleNumber, setMiddleNumber] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [totalNumber, setTotalNumber] = useState<string | number | undefined>(
    ''
  );
  const [operation, setOperation] = useState('');
  const [isTotal, setIsTotal] = useState(false);
  const [isComplete, setIsComplete] = useState(true);
  const [calHistoryToggle, setCalHistoryToggle] = useState(false);
  const [calHistories, setCalHistories] = useState<CalHistoriesProps[]>([
    {
      id: 0,
      prevNum: '',
      operation: '',
      midNum: '',
      totalNum: '',
    },
  ]);

  const inputValChecker = (inputNum: number | string, inputVal: string) => {
    if (!inputNum && inputVal === '.') return;
    if (inputNum.toString().includes('.') && inputVal === '.') return;
    if (!inputNum && inputVal === '0') return false;
    if (inputNum.toString().length > 14) return false;

    return true;
  };

  const handleInputVal = (e: React.MouseEvent<HTMLElement>) => {
    const val = e.currentTarget.innerText;

    if (totalNumber) {
      handleReset();
      if (inputValChecker(inputNumber, val)) {
        setInputNumber(inputNumber + val);
      }
    }
    if (inputValChecker(inputNumber, val)) {
      setInputNumber(inputNumber + val);
    }

    setIsTotal(false);
    setIsComplete(true);
  };

  const generatedCalculation = (
    oper: string,
    prevNum: string | number | undefined,
    inNum: string
  ) => {
    const prevNumber = prevNum ? prevNum : 0;
    const inNumber = inNum ? inNum : 0;
    const addition = +prevNumber + +inNumber;
    const subtraction = +prevNumber - +inNumber;
    let multiplication;
    let division;
    let calculated = 0;

    if (
      (operation !== '*' && oper === '*') ||
      (operation !== '/' && oper === '/')
    ) {
      multiplication = +prevNumber * 1;
      division = +prevNumber / 1;
    } else {
      multiplication = +prevNumber * +inNumber;
      division = +prevNumber / +inNumber;
    }

    switch (oper) {
      case '+':
        calculated = addition;
        break;
      case '-':
        calculated = subtraction;
        break;
      case '*':
        calculated = multiplication;
        break;
      case '/':
        calculated = division;
        break;
      default:
        return;
    }

    handleSetCalHistories(oper, calculated);

    return calculated;
  };

  const handleSetCalHistories = (_oper: string, _calculated: number) => {
    if (calHistories.length < 2) {
      setCalHistories((prevHis) => [
        ...prevHis,
        {
          id: prevHis[prevHis.length - 1].id + 1,
          prevNum: previousNumber,
          operation: _oper,
          midNum: inputNumber,
          totalNum: _calculated,
        },
      ]);
    } else {
      const arr = calHistories;
      setCalHistories(arr.slice(1, arr.length));
      setCalHistories((prevHis) => [
        ...prevHis,
        {
          id: prevHis[prevHis.length - 1].id + 1,
          prevNum: previousNumber,
          operation: _oper,
          midNum: inputNumber,
          totalNum: _calculated,
        },
      ]);
    }
  };

  const operate = (op: string) => {
    if (!inputNumber && !previousNumber) return;

    if (!previousNumber) {
      setPreviousNumber(inputNumber);
    } else if (previousNumber && !totalNumber) {
      setPreviousNumber(generatedCalculation(op, previousNumber, inputNumber));
    } else if (previousNumber && totalNumber) {
      setPreviousNumber(totalNumber);
      setMiddleNumber(inputNumber);
    }

    setOperation(op);
    setInputNumber('');
    setTotalNumber('');
    setIsTotal(false);
    setIsComplete(true);
  };

  const handleOperate = (e: React.MouseEvent<HTMLElement>) => {
    const oper = e.currentTarget.innerText;
    operate(oper);
  };

  const evaluate = () => {
    if (!previousNumber || (previousNumber && !inputNumber)) {
      return setIsComplete(false);
    }

    setPreviousNumber(previousNumber);
    console.log('in', inputNumber);
    setMiddleNumber(inputNumber);
    setInputNumber('');
    setTotalNumber(
      generatedCalculation(operation, previousNumber, inputNumber)
    );
    setOperation(operation);
    setIsTotal(true);
    setIsComplete(true);
  };

  const handleEvaluate = () => {
    evaluate();
  };

  const handleDelete = () => {
    setInputNumber(inputNumber.toString().slice(0, -1));
  };

  const handleReset = () => {
    setPreviousNumber('');
    setMiddleNumber('');
    setInputNumber('');
    setTotalNumber('');
    setOperation('');
    setIsTotal(false);
    setIsComplete(true);
    setCalHistories([
      {
        id: 0,
        prevNum: '',
        operation: '',
        midNum: '',
        totalNum: 0,
      },
    ]);
  };

  const handleChangePercent = () => {
    if (inputNumber) {
      setInputNumber((+inputNumber * 0.01).toString());
    }
  };

  const handleChangeSign = () => {
    if (inputNumber) {
      if (+inputNumber > 0) {
        setInputNumber((+inputNumber * -1).toString());
      } else {
        setInputNumber((+inputNumber * -1).toString());
      }
    }
  };

  const handleCalHistoryToggle = () => {
    setCalHistoryToggle(!calHistoryToggle);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const key = e.key;
    console.log(e);

    if (!isNaN(+key) && totalNumber) {
      handleReset();
      if (inputValChecker(inputNumber, key)) {
        setInputNumber(inputNumber + key);
        setIsTotal(false);
      }
    }
    if (!isNaN(+key) && inputValChecker(inputNumber, key)) {
      setInputNumber(inputNumber + key);
      setIsTotal(false);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      operate(key);
      setMiddleNumber('');
      setInputNumber('');
      setTotalNumber('');
      setIsTotal(false);
      setIsComplete(true);
    }
    if (key === '=') {
      evaluate();
    }
    if (key === 'Backspace') {
      handleDelete();
    }
    if (key === 'Escape' || key === 'r') {
      handleReset();
    }
    if (key === 'p') {
      handleChangePercent();
    }
    if (key === 's') {
      handleChangeSign();
    }
    if (key === 'h') {
      handleCalHistoryToggle();
    }
  };

  return (
    <S.CalBody onKeyDown={handleKeyDown}>
      <S.CalInputArea>
        <S.PreviousNumberDiv>
          {previousNumber &&
            parseFloat(previousNumber.toString()).toLocaleString()}
          {operation}
          {middleNumber &&
            `${parseFloat(middleNumber.toString()).toLocaleString()} =`}
        </S.PreviousNumberDiv>
        <S.CurrentNumberDiv>
          {inputNumber && parseFloat(inputNumber).toLocaleString()}
        </S.CurrentNumberDiv>
        <S.TotalNumberDiv>
          {isTotal &&
            totalNumber &&
            parseFloat(totalNumber.toString()).toLocaleString()}
        </S.TotalNumberDiv>
        {calHistoryToggle && (
          <S.CalHistoryDiv>
            <ul>
              {calHistories.map((his, i) => (
                <li key={his.id}>
                  {his.prevNum && (
                    <>
                      <div>
                        <span>
                          {parseFloat(his.prevNum.toString()).toLocaleString()}{' '}
                        </span>
                        <span>{his.operation} </span>
                        <span>{parseFloat(his.midNum).toLocaleString()} </span>
                        <span>= </span>
                      </div>
                      <div>
                        <span>
                          {his.totalNum &&
                            parseFloat(
                              his.totalNum.toString()
                            ).toLocaleString()}
                        </span>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </S.CalHistoryDiv>
        )}
      </S.CalInputArea>

      <S.CalControlButtonArea>
        <S.CalControlButton onClick={handleCalHistoryToggle}>
          <MdOutlineTimer />
        </S.CalControlButton>
        <S.CalControlButton onClick={handleDelete}>
          <BsBackspace />
        </S.CalControlButton>
      </S.CalControlButtonArea>

      <S.CalButtonArea>
        <S.CalButton
          style={S.clearButtonStyle}
          onClick={handleReset}
          disabled={calHistoryToggle}
        >
          C
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleChangePercent}
          disabled={calHistoryToggle}
        >
          %
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleOperate}
          disabled={calHistoryToggle}
        >
          /
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          7
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          8
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          9
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleOperate}
          disabled={calHistoryToggle}
        >
          *
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          4
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          5
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          6
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleOperate}
          disabled={calHistoryToggle}
        >
          -
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          1
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          2
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          3
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleOperate}
          disabled={calHistoryToggle}
        >
          +
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          0
        </S.CalButton>
        <S.CalButton onClick={handleInputVal} disabled={calHistoryToggle}>
          .
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleChangeSign}
          disabled={calHistoryToggle}
        >
          +/-
        </S.CalButton>
        <S.CalButton
          style={S.operationButtonStyle}
          onClick={handleEvaluate}
          disabled={calHistoryToggle}
        >
          =
        </S.CalButton>
      </S.CalButtonArea>
      <S.CalMsgDiv>
        {inputNumber.toString().length > 14 && `${messages.generalCalMsg}`}
        {!isComplete && `${messages.notCompleteMsg}`}
      </S.CalMsgDiv>
    </S.CalBody>
  );
};

export default GeneralCalculator;
