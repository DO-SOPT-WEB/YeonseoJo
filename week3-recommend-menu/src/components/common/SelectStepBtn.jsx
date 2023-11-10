import styled, { css } from "styled-components";

const SelectStepBtn = ({ isAbsolute = false, innerTxt, setStep }) => {
  const handleStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <StepBtn $isAbsolute={isAbsolute} onClick={handleStep}>
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
`;
