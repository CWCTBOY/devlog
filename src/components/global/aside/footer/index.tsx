import styled from "@emotion/styled";
import { MdOutlineSettings, MdEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AsideFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AsideFooter = () => {
  const navigate = useNavigate();
  return (
    <AsideFooterContainer>
      <MdOutlineSettings
        color="white"
        size={20}
        style={{ cursor: "pointer", margin: "0 10px 0 0" }}
      />
      <MdEditNote
        color="white"
        size={25}
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("admin/new-post");
        }}
      />
    </AsideFooterContainer>
  );
};

export default AsideFooter;
