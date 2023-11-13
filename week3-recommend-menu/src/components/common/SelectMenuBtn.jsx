import styled, { css } from "styled-components";

const SelectMenuBtn = ({ isBig = false, innerTxt, isSelected, onClick }) => {
  // 재사용할 메뉴 선택 버튼 공통 컴포넌트
  // isBig : 첫번째 단계일 때

  return (
    <>
      {isBig ? (
        <BigSelectMenuBtn onClick={onClick}>{innerTxt}</BigSelectMenuBtn>
      ) : (
        <SmallSelectMenuBtn $isSelected={isSelected} onClick={onClick}>
          {innerTxt}
        </SmallSelectMenuBtn>
      )}
    </>
  );
};

export default SelectMenuBtn;

const SelectMenuBtnStyle = styled.button`
  color: ${({ theme }) => theme.colors.hoverColor};
  background-color: ${({ theme }) => theme.colors.bgColor};

  border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 1rem;
`;

const BigSelectMenuBtn = styled(SelectMenuBtnStyle)`
  width: 30%;
  height: 18rem;

  font-size: 2.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.bgColor};
    background-color: ${({ theme }) => theme.colors.pointColor};
    border: none;
  }
`;

const SmallSelectMenuBtn = styled(SelectMenuBtnStyle)`
  width: 15%;
  height: 10rem;

  font-size: 1.5rem;

  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.pointColor};
  }

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          color: ${({ theme }) => theme.colors.bgColor};
          background-color: ${({ theme }) => theme.colors.pointColor};
          border: none;
        `
      : css`
          color: ${({ theme }) => theme.colors.hoverColor};
          background-color: ${({ theme }) => theme.colors.bgColor};
        `};
`;
