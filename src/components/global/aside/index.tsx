import styled from "@emotion/styled";
import aside_img from "../../../assets/aside_img.jpeg";
import AsideProfile from "./profile";

const Aside = styled.aside`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: -3px 5px 19px 5px rgba(255, 255, 255, 0.3);
  background-color: ${({ theme }) => theme.color.black};
  .bgImg {
    width: 350%;
  }
`;

const AsideTopLayer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.15);
`;

const GlobalAside = () => {
  return (
    <Aside>
      <img src={aside_img} alt="aside_image" className="bgImg" />
      <AsideTopLayer>
        <AsideProfile />
      </AsideTopLayer>
    </Aside>
  );
};

export default GlobalAside;
