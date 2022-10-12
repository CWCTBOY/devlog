import styled from "@emotion/styled";
import { MdOutlineSettings } from "react-icons/md";

const AsideFooterContainer = styled.div`
  width: 100%;
`;

const AsideFooter = () => {
  return (
    <AsideFooterContainer>
      <MdOutlineSettings color="white" size={20} />
    </AsideFooterContainer>
  );
};

export default AsideFooter;
