import { useState } from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { BsBackspace } from 'react-icons/bs';
import * as C from '../../../styles/calculators';
import * as S from '../../../styles';

export const GeneralCal = () => {
  const [prevNumber, setPrevNumber] = useState<string | number>('');
  const [currNumber, setCurrNumber] = useState<string | number>('');
  const [resultNumber, setResultNumber] = useState<number>(0);

  const handleInputNum = (e: any) => {
    const num = e.target.textContent;

    if (inputNumChecker()) {
      setCurrNumber((prevNum) => {
        const currNum = prevNum + num;
        return currNum;
      });
    }
  };

  const inputNumChecker = () => {
    if (currNumber.toString().length > 15) {
      alert('15자리까지 입력할 수 있어요.');
      return false;
    }
    return true;
  };

  const calculateNumbers = (action: any) => {
    setCurrNumber('');

    if (action === '＋') {
      const result = +prevNumber + +currNumber;

      setPrevNumber(result);
      setResultNumber(result);
    } else if (action === '－') {
      const result = +prevNumber - +currNumber;

      setResultNumber(result);
      setPrevNumber(result);
    } else if (action === '×') {
      const result = +prevNumber * +currNumber;

      setResultNumber(result);
      setPrevNumber(result);
    } else if (action === '÷') {
      const result = +prevNumber / +currNumber;

      setResultNumber(result);
      setPrevNumber(result);
    }
  };

  const resetNumber = () => {
    setPrevNumber('');
    setCurrNumber('');
    setResultNumber(0);
  };

  const handleChangeSign = () => {
    if (+currNumber > 0) {
      setCurrNumber((prevNum) => {
        const minusNumber = +prevNum * -1;
        return minusNumber;
      });
    } else if (+currNumber < 0) {
      console.log(+currNumber);
      setCurrNumber((prevNum) => {
        const plusNumber = +prevNum * -1;
        return plusNumber;
      });
    }
  };

  return (
    <C.CalBody>
      <C.CalInputArea
        style={{
          flexDirection: 'column',
        }}
      >
        <div>
          <span style={{ color: 'white' }}>Prev: </span>
          <input
            type="number"
            value={prevNumber}
            readOnly
            style={{ textAlign: 'right' }}
            maxLength={15}
          />
        </div>
        <div>
          <span style={{ color: 'white' }}>Curr: </span>
          <input
            type="number"
            value={currNumber}
            readOnly
            style={{ textAlign: 'right' }}
            maxLength={15}
          />
        </div>
        <div>
          <span style={{ color: 'white' }}>Ret: </span>
          <input
            type="number"
            value={resultNumber}
            readOnly
            style={{ textAlign: 'right' }}
            maxLength={15}
          />
        </div>
      </C.CalInputArea>

      <C.CalControlButtonArea>
        <C.CalControlButton>
          <MdOutlineTimer
            style={{
              color: `${S.GeneralCalColors.blue}`,
              fontSize: '22px',
            }}
          />
        </C.CalControlButton>
        <C.CalControlButton>
          <BsBackspace
            style={{ color: `${S.GeneralCalColors.blue}`, fontSize: '22px' }}
          />
        </C.CalControlButton>
      </C.CalControlButtonArea>

      <C.CalButtonArea>
        <div>
          <C.CalButton
            style={{ color: `${S.GeneralCalColors.red}` }}
            onClick={resetNumber}
          >
            C
          </C.CalButton>
          <C.CalButton style={{ color: `${S.GeneralCalColors.beige}` }}>
            ()
          </C.CalButton>
          <C.CalButton style={{ color: `${S.GeneralCalColors.beige}` }}>
            %
          </C.CalButton>
          <C.CalButton
            style={{ color: `${S.GeneralCalColors.beige}` }}
            onClick={() => calculateNumbers('÷')}
          >
            ÷
          </C.CalButton>
        </div>
        <div>
          <C.CalButton onClick={handleInputNum}>7</C.CalButton>
          <C.CalButton onClick={handleInputNum}>8</C.CalButton>
          <C.CalButton onClick={handleInputNum}>9</C.CalButton>
          <C.CalButton
            style={{ color: `${S.GeneralCalColors.beige}` }}
            onClick={() => calculateNumbers('×')}
          >
            ×
          </C.CalButton>
        </div>
        <div>
          <C.CalButton onClick={handleInputNum}>4</C.CalButton>
          <C.CalButton onClick={handleInputNum}>5</C.CalButton>
          <C.CalButton onClick={handleInputNum}>6</C.CalButton>
          <C.CalButton
            style={{ color: `${S.GeneralCalColors.beige}` }}
            onClick={() => calculateNumbers('－')}
          >
            －
          </C.CalButton>
        </div>
        <div>
          <C.CalButton onClick={handleInputNum}>1</C.CalButton>
          <C.CalButton onClick={handleInputNum}>2</C.CalButton>
          <C.CalButton onClick={handleInputNum}>3</C.CalButton>
          <C.CalButton
            style={{ color: `${S.GeneralCalColors.beige}` }}
            onClick={() => calculateNumbers('＋')}
          >
            ＋
          </C.CalButton>
        </div>
        <div>
          <C.CalButton onClick={handleChangeSign}>+/-</C.CalButton>
          <C.CalButton onClick={handleInputNum}>0</C.CalButton>
          <C.CalButton>.</C.CalButton>
          <C.CalButton style={{ color: `${S.GeneralCalColors.beige}` }}>
            ＝
          </C.CalButton>
        </div>
      </C.CalButtonArea>
    </C.CalBody>
  );
};
