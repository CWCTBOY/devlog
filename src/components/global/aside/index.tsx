import { Aside, AsideTopLayer } from "../../../styles/global/aside";
import aside_img from "../../../assets/aside_img.jpeg";

const GlobalAside = () => {
  return (
    <Aside>
      <img src={aside_img} alt="aside_image" className="bgImg" />
      <AsideTopLayer />
    </Aside>
  );
};

export default GlobalAside;
