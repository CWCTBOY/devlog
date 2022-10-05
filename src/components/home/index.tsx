import styled from "@emotion/styled";
import GridContent from "./gridContent";
/*
dummyImageProducer
*/
import code1 from "../../assets/dummy/code1.png";
import code2 from "../../assets/dummy/code2.jpeg";
import code3 from "../../assets/dummy/code3.jpeg";
import code4 from "../../assets/dummy/code4.jpeg";

export interface DummyDataProps {
  id: number;
  image: string;
  title: string;
  view: number;
  comment: number;
}

const dummyData = [
  {
    id: 1,
    image: code1,
    title: "title1",
    view: 100,
    comment: 123,
  },
  {
    id: 2,
    image: code3,
    title: "title2",
    view: 100,
    comment: 123,
  },
  {
    id: 3,
    image: code2,
    title: "title3",
    view: 100,
    comment: 123,
  },
  {
    id: 4,
    image: code4,
    title: "title4",
    view: 100,
    comment: 123,
  },
  {
    id: 5,
    image: code4,
    title: "title1",
    view: 100,
    comment: 123,
  },
  {
    id: 6,
    image: code2,
    title: "title2",
    view: 100,
    comment: 123,
  },
  {
    id: 7,
    image: code3,
    title: "title3",
    view: 100,
    comment: 123,
  },
  {
    id: 8,
    image: code1,
    title: "title4",
    view: 100,
    comment: 123,
  },
  {
    id: 9,
    image: code3,
    title: "title1",
    view: 100,
    comment: 123,
  },
  {
    id: 10,
    image: code2,
    title: "title2",
    view: 100,
    comment: 123,
  },
  {
    id: 11,
    image: code1,
    title: "title3",
    view: 100,
    comment: 123,
  },
  {
    id: 12,
    image: code4,
    title: "title4",
    view: 100,
    comment: 123,
  },
];

const MasonryContainer = styled.div`
  column-count: 3;
  column-gap: 15px;
`;

const Masonry = () => {
  return (
    <MasonryContainer>
      {dummyData.map((content) => (
        <GridContent content={content}></GridContent>
      ))}
    </MasonryContainer>
  );
};

export default Masonry;
