import { DummyDataProps } from ".";
import {
  Content,
  ContentLayer,
  Thumbnail,
} from "../../styles/home/gridContent";

const GridContent = ({
  content: { id, image, title, view, comment },
}: {
  content: DummyDataProps;
}) => {
  return (
    <Content>
      <Thumbnail src={image} />
      <ContentLayer></ContentLayer>
    </Content>
  );
};

export default GridContent;
