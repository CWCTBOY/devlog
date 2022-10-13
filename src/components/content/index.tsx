import { useParams } from "react-router-dom";
import NotYetCreated from "../common/static/NotYetCreated";

const Article = () => {
  /**
   * @description contentId로 해당 게시물을 불러온다.
   */
  const contentId = useParams().contentInfo?.split("_")[0];
  /**
   * @description 로딩 애니메이션 구현, 아직 콘텐츠 데이터는 받아오지 못함
   */
  return <NotYetCreated />;
};

export default Article;
