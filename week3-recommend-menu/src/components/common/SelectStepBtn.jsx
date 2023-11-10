import styled, { css } from "styled-components";
import { SELECTED_MENU } from "../../assets/data/MENU_CATEGORY";
import { useReducer } from "react";

const SelectStepBtn = ({
  isAbsolute = false,
  selectedMethod,
  setSelectedMenu,
  isDisabled,
  innerTxt,
  setStep,
}) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "optional":
        return setStep(state + 1);
      case "randomize":
        return setStep(4);
    }
  };
  const [, dispatch] = useReducer(reducer, 0);

  const handleStep = () => {
    if (isDisabled) return;

    switch (innerTxt) {
      case "START!":
        dispatch({ type: selectedMethod });
        break;
      case "이전으로":
        setStep((prev) => prev - 1);
        break;
      case "다음으로":
      case "결과보기":
        setStep((prev) => prev + 1);
        break;
      case "다시하기":
        setSelectedMenu((prev) => {
          return { ...prev, country: "", type: "", isSpicy: null };
        });
        setStep(0);
        break;
      case "처음으로":
        setSelectedMenu(SELECTED_MENU);
        setStep(0);
        break;
    }
  };

  return (
    <>
      <StepBtn
        $isAbsolute={isAbsolute}
        $isDisabled={isDisabled}
        onClick={handleStep}
      >
        {innerTxt}
      </StepBtn>
    </>
  );
};

export default SelectStepBtn;

const StepBtn = styled.button`
  width: 7rem;
  height: 4rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;

  border-radius: 0.5rem;

  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.pointColor};
  }

  ${({ $isAbsolute }) =>
    $isAbsolute &&
    css`
      position: absolute;
      right: 0;

      margin-right: 5rem;
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    `
    filter: opacity(50%);
    `};
`;
