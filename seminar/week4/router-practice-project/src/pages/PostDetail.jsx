import styled from "styled-components";
import Header from "../components/Header";
import { POST_LIST } from "../constants/POST_LIST";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  // useParams 실습
  const { postId } = useParams();

  const targetPost = POST_LIST.find(({ id }) => String(id) === postId);

  return (
    <Container>
      {/* <Header /> */}
      <PostDetailContainer>
        <img src={targetPost.imgSrc} alt={targetPost.title} />
        <Title>{targetPost.title}</Title>
        <Description>{targetPost.description}</Description>
      </PostDetailContainer>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  width: 100vw;
`;

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  width: 600px;
  height: 600px;

  margin: 30px auto 0;

  background-color: #ffedf0;

  & > img {
    width: 350px;
    height: 350px;

    border-radius: 50px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;
const Description = styled.h2`
  font-size: 30px;
  font-weight: bold;

  color: gray;
`;
