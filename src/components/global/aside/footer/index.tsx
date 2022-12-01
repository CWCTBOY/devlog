import styled from "@emotion/styled";
import { MdOutlineSettings, MdEditNote, MdCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AsideFooterContainer = styled.div`
  width: 100%;
  display: flex;
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    .title {
      display: flex;
      align-items: center;
      height: 100%;
      color: ${({ theme }) => theme.color.white};
      font-size: 13px;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
  }
`;

const AsideFooter = () => {
  const navigate = useNavigate();
  return (
    <AsideFooterContainer>
      <div className="left">
        <span>
          <MdCopyright
            color="white"
            size={13}
            style={{ margin: "0 5px 0 0" }}
          />
        </span>
        <div className="title">
          <span>daniel park</span>
        </div>
      </div>
      <div className="right">
        <MdEditNote
          color="white"
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("admin/new-post");
          }}
        />
        <MdOutlineSettings
          color="white"
          size={20}
          style={{ cursor: "pointer", margin: "0 0 0 10px" }}
        />
      </div>
    </AsideFooterContainer>
  );
};

export default AsideFooter;
