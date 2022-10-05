import styled from "@emotion/styled";

const Aside = styled.aside`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .bgImg {
    width: 200%;
  }
`;

const AsideTopLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { Aside, AsideTopLayer };
