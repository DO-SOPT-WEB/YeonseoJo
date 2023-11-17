import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ContentsHeader from "../components/common/ContentsHeader";
import styled from "styled-components";

import ic_person from "../assets/icons/ic_person.png";
import useGetMemberInfo from "../libs/apis/useGetMemberInfo";

const MyPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { response, error } = useGetMemberInfo(userId);
  const { username, nickname } = response;

  const handleClickLogoutBtn = () => {
    navigate("/login");
  };

  return (
    <>
      {!error && (
        <PageLayout>
          <ContentsHeader title={"MY PAGE"} />

          <St.MyInfoBox>
            <St.MyInfoIcon src={ic_person} alt="마이페이지-회원-아이콘" />
            <St.MyInfoContentBox>
              <St.MyInfoContent>
                <span>ID : </span>
                <span>{username}</span>
              </St.MyInfoContent>
              <St.MyInfoContent>
                <span>닉네임 :</span>
                <span>{nickname}</span>
              </St.MyInfoContent>
            </St.MyInfoContentBox>
          </St.MyInfoBox>

          <St.LogOutBtn type="button" onClick={handleClickLogoutBtn}>
            로그아웃
          </St.LogOutBtn>
        </PageLayout>
      )}
    </>
  );
};

export default MyPage;

const St = {
  MyInfoBox: styled.article`
    display: flex;
    width: 100%;

    padding: 0 3rem;
  `,

  MyInfoIcon: styled.img`
    width: 7rem;
  `,

  MyInfoContentBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 0.7rem;

    font-size: 1.5rem;
  `,

  MyInfoContent: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 12rem;
    padding: 1rem;
    gap: 0.7rem;

    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.black};

    border-radius: 0.5rem;
  `,

  LogOutBtn: styled.button`
    width: 7rem;
    height: 2.8rem;

    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;

    border-radius: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }
  `,
};
