import styled from "styled-components";

const PageLayout = ({ children }) => {
  return (
    <St.PageLayoutBackGround>
      <St.PageLayoutBody>
        <St.PageLayoutTopBar>
          <TopBarBlueBtn type="button">_</TopBarBlueBtn>
          <TopBarBlueBtn type="button">ᄆ</TopBarBlueBtn>
          <TopBarRedBtn type="button">X</TopBarRedBtn>
        </St.PageLayoutTopBar>

        <St.PageLayoutContentsContainer>
          {children}
        </St.PageLayoutContentsContainer>
      </St.PageLayoutBody>
    </St.PageLayoutBackGround>
  );
};

export default PageLayout;

const St = {
  PageLayoutBackGround: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGray};
  `,
  PageLayoutBody: styled.section`
    display: flex;
    flex-direction: column;

    width: 40rem;
    height: 30rem;

    background-color: ${({ theme }) => theme.colors.white};

    border: 0.2rem solid ${({ theme }) => theme.colors.blue};
    border-radius: 0.5rem;

    box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem darkgray;
  `,
  PageLayoutTopBar: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    height: 2.5rem;
    padding: 0 0.5rem;
    gap: 0.5rem;

    background-color: ${({ theme }) => theme.colors.blue};
  `,
  PageLayoutContentsContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 2rem;
  `,
};

const TopBarBtn = styled.button`
  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.colors.white};

  border: 0.07rem solid ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;

  font-size: 1rem;
`;

const TopBarBlueBtn = styled(TopBarBtn)`
  background-color: ${({ theme }) => theme.colors.blue};
`;

const TopBarRedBtn = styled(TopBarBtn)`
  background-color: ${({ theme }) => theme.colors.red};
`;
