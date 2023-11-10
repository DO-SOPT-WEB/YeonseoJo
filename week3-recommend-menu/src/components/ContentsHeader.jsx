import styled from "styled-components";

const ContentsHeader = ({ title }) => {
  return (
    <MainContentsHeader>
      <h2>{title}</h2>
    </MainContentsHeader>
  );
};

export default ContentsHeader;

const MainContentsHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 3.5rem;

  color: ${({ theme }) => theme.colors.pointColor};
  background-color: ${({ theme }) => theme.colors.bgColor};

  font-size: 1.5rem;

  border-radius: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.pointColor};
`;
