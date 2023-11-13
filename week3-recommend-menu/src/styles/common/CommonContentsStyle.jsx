import styled from "styled-components";

export const MianContentsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;
  gap: 0.5rem;
`;

export const SelectMenuBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  height: 80%;
`;

export const StepBtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

export const CurrStepWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  height: fit-content;
`;

export const CurrStepTag = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.black};
`;
