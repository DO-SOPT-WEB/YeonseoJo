import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <St.PageLayoutBackGround>
      <St.PageLayoutBody>
        <St.PageLayoutTopBar>
          <TopBarBlueBtn type="button">_</TopBarBlueBtn>
          <TopBarBlueBtn type="button">ᄆ</TopBarBlueBtn>
          <TopBarRedBtn type="button" onClick={() => navigate("/")}>
            X
          </TopBarRedBtn>
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

    width: 35rem;
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
    height: 2.7rem;
    padding: 0 0.5rem 0.2rem 0;
    gap: 0.5rem;

    background-color: ${({ theme }) => theme.colors.blue};
  `,
  PageLayoutContentsContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 3rem 2rem;
    gap: 1.2rem;
  `,
};

const TopBarBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0;

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
