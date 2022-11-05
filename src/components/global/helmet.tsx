import { Helmet as HM } from "react-helmet";
import gdsc from "../../assets/gdsc.png";

const Helmet = ({ route }: { route: string }) => {
  return (
    <HM>
      <title>Devlog | {route}</title>
      <link rel="icon" type="image/png" href={gdsc} />
    </HM>
  );
};

export default Helmet;
