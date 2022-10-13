import styled from "@emotion/styled";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const ForbiddenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.white};
    margin-left: 10px;
  }
`;

const Forbidden = () => {
  return (
    <ForbiddenContainer>
      <MdOutlineAdminPanelSettings size={70} color="#F60062" />
      <span className="text">
        Forbidden. <br /> You don't have permission to access.
      </span>
    </ForbiddenContainer>
  );
};

export default Forbidden;
