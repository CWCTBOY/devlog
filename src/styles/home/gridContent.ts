import styled from "@emotion/styled";

const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0 15px 0;
`;

const Thumbnail = styled.img`
  width: 200%;
`;

const ContentLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  .title {
  }
`;

export { Content, Thumbnail, ContentLayer };
