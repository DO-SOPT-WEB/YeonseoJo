import { POST_LIST } from "../constants/POST_LIST";
import Post from "../components/Post";
import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

// 게시글 리스트
const PostList = () => {
  const postList = POST_LIST.map((post) => {
    const { id, imgSrc, title, description } = post;
    return (
      <Post
        key={id}
        id={id}
        imgSrc={imgSrc}
        imgDescription={title}
        title={title}
        description={description}
      />
    );
  });
  return (
    <Container>
      <Header />
      <Outlet />
      <PostListContainer>{postList}</PostListContainer>
    </Container>
  );
};

export default PostList;

const Container = styled.div``;

const PostListContainer = styled.section`
  display: flex;
  justify-content: center;

  gap: 20px 30px;
  flex-wrap: wrap;

  width: 100vw;

  margin-top: 20px;
`;
