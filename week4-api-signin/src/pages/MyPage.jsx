import { useParams } from "react-router-dom";

const MyPage = () => {
  const { userId } = useParams();

  return <div>{userId}의 마이 페이지 뷰</div>;
};

export default MyPage;
