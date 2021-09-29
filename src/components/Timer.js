import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function Timer() {

  let timerRef = useRef();

  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  const zeroPad = (num,size) => {
    let s = String(num);
    while (s.length < size) { s = '0' + s}
    return s;
  }

  const timeFormat = (milliseconds) => {
    let remaining = milliseconds / 1000;
    remaining %= 3600;
    const mm = parseInt(remaining / 60, 10);
    const ss = parseInt(remaining % 60, 10);
    const S = parseInt((milliseconds % 1000) / 100, 10);

    return `${ zeroPad(mm,2) }:${ zeroPad(ss,2) }:${ S }`;
  }

  const buildTimer = (val) => {
    const timeValue = val;
    return (
      <TimeValueWrapper>
        { timeFormat(timeValue) }
      </TimeValueWrapper>
    )
  }

  const updateTimer = (extraTime) => {
    setTime(time + extraTime);
  }

  const startTimer = () => {
    setRunning(true);
    timerRef = setInterval(() => {
      updateTimer(100, 1000)
    });
  }

  const stopTimer = () => {
    setRunning(false);
    clearInterval(timerRef);
  }

  useEffect(() => {
    // startTimer();
    return () => {
      stopTimer();
    }
  })
  
  return (
    <TimerWrapper>
      Delta :&nbsp;&nbsp;
      {buildTimer(time)}
    </TimerWrapper>
  );
}

export default Timer;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'FormulaBold';
  font-size: 2rem;
  text-align: center;
  text-indent: 4rem;
  width: 100%;
`;

const TimeValueWrapper = styled.div`
`;