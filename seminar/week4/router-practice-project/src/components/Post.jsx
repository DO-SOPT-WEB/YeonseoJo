import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 게시물
const Post = ({ id, imgSrc, title }) => {
  const navigate = useNavigate();

  // useNavigate 실습
  const handleOnClickDetail = () => {
    navigate(`./${id}`);
  };

  return (
    <PostContainer>
      <img src={imgSrc} alt={title} />{" "}
      <Title>
        <h2>{title}</h2>
      </Title>
      <DetailButton onClick={handleOnClickDetail}>자세히 보러가기</DetailButton>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 20px;

  align-items: center;

  width: 290px;
  height: 300px;

  padding: 20px;

  background-color: lightgray;

  & > img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: white;
  }
`;

const Title = styled.header`
  font-size: 25px;
  font-weight: bold;
`;

const DetailButton = styled.button`
  background-color: black;
  color: white;

  border-radius: 5px;
`;
