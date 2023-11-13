import styled from "styled-components";

const Post = ({ title, body }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  background-color: white;
  width: 90vw;
  height: 100px;

  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Body = styled.p`
  font-size: 15px;
`;
