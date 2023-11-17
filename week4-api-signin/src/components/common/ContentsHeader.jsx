import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return (
    <St.ContentsHeaderWrapper>
      <h1>{title}</h1>
    </St.ContentsHeaderWrapper>
  );
};

export default ContentsHeader;

const St = {
  ContentsHeaderWrapper: styled.header`
    display: flex;
    justify-content: center;

    width: 100%;

    font-size: 2.2rem;

    color: ${({ theme }) => theme.colors.black};
  `,
};
