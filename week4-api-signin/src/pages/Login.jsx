import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import ContentsHeader from "../components/common/ContentsHeader";
import { useState } from "react";
import postSignInMember from "../libs/apis/postSignInMember";

const Login = () => {
  const LOGIN_INPUT_LIST = [
    {
      description: "ID",
      placeholder: "아이디를 입력해주세요.",
    },
    {
      description: "PASSWORD",
      placeholder: "비밀번호를 입력해주세요.",
    },
  ];

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ userId: "", password: "" });
  const [navigatURL, setNavigateURL] = useState("");

  const handleChangeUserInput = (e, type) => {
    switch (type) {
      case "ID":
        setUserInfo((prev) => {
          return { ...prev, userId: e.target.value };
        });
        break;
      case "PASSWORD":
        setUserInfo((prev) => {
          return { ...prev, password: e.target.value };
        });
    }
  };

  const handleClickLoginBtn = () => {
    postSignInMember(userInfo, setNavigateURL);
    navigatURL && navigate(navigatURL);
  };

  return (
    <PageLayout>
      <ContentsHeader title="Login" />

      {LOGIN_INPUT_LIST.map(({ description, placeholder }) => {
        return (
          <St.LoginInputContainer key={description}>
            <St.LoginInputDescription>{description}</St.LoginInputDescription>
            <St.LoginInput
              placeholder={placeholder}
              onChange={(e) => handleChangeUserInput(e, description)}
            />
          </St.LoginInputContainer>
        );
      })}

      <St.LoginBtn type="button" onClick={handleClickLoginBtn}>
        로그인
      </St.LoginBtn>
      <St.SignUpLink to="/signup">회원가입</St.SignUpLink>
    </PageLayout>
  );
};

export default Login;

const St = {
  LoginInputContainer: styled.article`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 0 3rem;
    gap: 1.5rem;
  `,

  LoginInputDescription: styled.p`
    width: 8rem;
    font-size: 1.3rem;
  `,

  LoginInput: styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 0 0.5rem;

    font-size: 1rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.colors.black};
      border-radius: 0.15rem;
    }
  `,
  LoginBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 6rem);
    height: 2.7rem;
    margin-top: 1rem;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.2rem;

    border-radius: 0.5rem;
  `,
  SignUpLink: styled(Link)`
    color: ${({ theme }) => theme.colors.darkGray};

    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
};
