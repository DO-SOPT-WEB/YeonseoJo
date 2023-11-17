import styled from "styled-components";
import PageLayout from "../components/PageLayout";
import ContentsHeader from "../components/common/ContentsHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getMemberCheck from "../libs/apis/getMemberCheck";
import postSignUpMember from "../libs/apis/postSignUpMember";

const SignUp = () => {
  const SIGNUP_INPUT_LIST = [
    {
      description: "ID",
      placeholder: "아이디를 입력해주세요.",
    },
    {
      description: "비밀번호",
      placeholder: "비밀번호를 입력해주세요.",
    },
    {
      description: "비밀번호 확인",
      placeholder: "비밀번호를 다시 한 번 입력해주세요.",
    },
    {
      description: "닉네임",
      placeholder: "닉네임을 입력해주세요.",
    },
  ];

  const navigate = useNavigate();

  //input으로 받아올 유저 정보
  const [userInputs, setUserInputs] = useState({
    userId: "",
    password: "",
    confirmPwd: "",
    nickname: "",
  });

  const { userId, password, confirmPwd, nickname } = userInputs;

  // 중복체크 결과
  const [isExist, setIsExist] = useState("unChecked");
  // 회원가입 검증 결과
  const [isActiveSignUp, setIsActiveSignUp] = useState(false);

  const handleClickExistBtn = () => {
    //id 중복 체크 get 통신
    getMemberCheck(userId, setIsExist);
  };

  const handleSaveInputValue = (e, type) => {
    switch (type) {
      case "ID":
        setUserInputs((prev) => {
          return { ...prev, userId: e.target.value };
        });
        break;
      case "비밀번호":
        setUserInputs((prev) => {
          return { ...prev, password: e.target.value };
        });
        break;
      case "비밀번호 확인":
        setUserInputs((prev) => {
          return { ...prev, confirmPwd: e.target.value };
        });
        break;
      case "닉네임":
        setUserInputs((prev) => {
          return { ...prev, nickname: e.target.value };
        });
        break;
    }
  };

  const handleClickSignUpBtn = () => {
    let isSuccess = false;

    if (!isActiveSignUp) return;
    isSuccess = postSignUpMember(userId, password, nickname, isSuccess);

    isSuccess && navigate("/login");
  };

  useEffect(() => {
    //회원 가입 조건 검증
    userId &&
    password &&
    confirmPwd &&
    nickname &&
    !isExist &&
    password === confirmPwd
      ? setIsActiveSignUp(true)
      : setIsActiveSignUp(false);
  }, [userId, password, confirmPwd, nickname, isExist]);

  useEffect(() => {
    setIsExist("unChecked");
  }, [userId]);

  return (
    <PageLayout>
      <ContentsHeader title="Sign-Up" />

      {SIGNUP_INPUT_LIST.map(({ description, placeholder }) => {
        return (
          <St.SignUpInputContainer key={description}>
            <St.SignUpInputDescription>{description}</St.SignUpInputDescription>
            <St.SignUpInputBox>
              <St.SignUpInput
                placeholder={placeholder}
                onChange={(e) => handleSaveInputValue(e, description)}
              />
              {description === "ID" && (
                <St.DuplicateCheckBtn
                  type="button"
                  $isExist={isExist}
                  onClick={handleClickExistBtn}
                >
                  중복 체크
                </St.DuplicateCheckBtn>
              )}
            </St.SignUpInputBox>
          </St.SignUpInputContainer>
        );
      })}

      <St.SignUpBtn
        type="button"
        $isActiveSignUp={isActiveSignUp}
        onClick={handleClickSignUpBtn}
      >
        회원가입
      </St.SignUpBtn>
    </PageLayout>
  );
};

export default SignUp;

const St = {
  SignUpInputContainer: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 3rem;
    gap: 1.5rem;
  `,

  SignUpInputDescription: styled.p`
    font-size: 1.3rem;
  `,

  SignUpInputBox: styled.div`
    display: flex;
    align-items: center;

    width: 17rem;
    gap: 1rem;
  `,

  SignUpInput: styled.input`
    min-width: 10rem;
    width: 17rem;
    height: 2.2rem;
    padding: 0 0.5rem;

    font-size: 1rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.colors.black};
      border-radius: 0.15rem;
    }
  `,

  DuplicateCheckBtn: styled.button`
    width: 6rem;
    height: 2.2rem;

    font-size: 0.9rem;

    background-color: ${({ $isExist, theme }) =>
      $isExist === "unChecked"
        ? theme.colors.black
        : $isExist
        ? theme.colors.red
        : theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    border-radius: 0.5rem;
  `,

  SignUpBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 6rem);
    height: 2.7rem;
    margin-top: 1rem;

    background-color: ${({ theme, $isActiveSignUp }) =>
      $isActiveSignUp ? theme.colors.black : theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.2rem;

    border-radius: 0.5rem;
  `,
};
