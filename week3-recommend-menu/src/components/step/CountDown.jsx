import { useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const CountDown = ({ count, setCount }) => {
  const countDownTimer = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  useEffect(() => {
    const timerId = setInterval(countDownTimer, 1000);
    return () => clearInterval(timerId);
  }, [count, countDownTimer]);

  return (
    <CountWrapper>
      <Count>{count}</Count>
    </CountWrapper>
  );
};

export default CountDown;

//애니메이션 정의
const neon = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60%;
`;

const Count = styled.p`
  font-size: 5rem;

  animation: ${neon} 1s ease infinite;
  -moz-animation: ${neon} 1s ease infinite;
  -webkit-animation: ${neon} 1s ease infinite;
`;
