import styled from "styled-components";
import ToastPortal from "./ToastPortal";

const Toast = () => {
  return (
    <ToastPortal>
      <St.ToastWrapper>
        <St.ToastBox>
          <p>에러메시지 들어갈 부분</p>
        </St.ToastBox>
      </St.ToastWrapper>
    </ToastPortal>
  );
};

export default Toast;

const St = {
  ToastWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    position: fixed;
    top: 0;

    width: 100%;
    height: 100%;
    padding-bottom: 7rem;
  `,

  ToastBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 18rem;
    height: 2.5rem;
    border-radius: 0.7rem;

    background-color: black;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;
  `,
};
