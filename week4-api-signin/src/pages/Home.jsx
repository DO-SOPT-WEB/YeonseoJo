import styled from "styled-components";
import PageLayout from "../components/PageLayout";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <St.GoToLoginBtn type="button" onClick={() => navigate("/login")}>
        로그인 하러 가기
      </St.GoToLoginBtn>
    </PageLayout>
  );
};

export default Home;

const St = {
  GoToLoginBtn: styled.button`
    width: 20rem;
    height: 5rem;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};

    font-size: 2rem;

    &::hover {
      box-shadow: 0 0 1rem ${({ theme }) => theme.colors.blue};
    }
  `,
};
