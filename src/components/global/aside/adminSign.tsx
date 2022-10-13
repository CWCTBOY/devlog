import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignOut,
  tokenCheck,
} from "../../../certificate/temporalCertification";
import { transition } from "../../../styles/global/animation";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AdminSignContainer = styled.div<{
  admin: boolean;
  isHover: boolean;
}>`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: ${transition};
  top: ${({ admin }) => (admin ? "137px" : "80px")};
  left: 0;
  opacity: ${({ admin }) => (admin ? "1" : "0")};
  z-index: 0;
  .triangle,
  .btn {
    transition: ${transition};
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme, isHover }) =>
      isHover ? theme.color.black : theme.color.white};
    background-color: ${({ theme, isHover }) =>
      isHover ? theme.color.highlight : theme.color.lightGray};
    cursor: pointer;
  }
  .triangle {
    width: 20px;
    height: 20px;
    transform: translateY(10px) rotate(45deg);
    z-index: 0;
  }
  .btn {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRad.default};
    z-index: 1;
  }
`;

const AdminSign = ({
  admin,
  setAdmin,
}: {
  admin: boolean;
  setAdmin: (admin: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  return (
    <AdminSignContainer admin={admin} isHover={isHover}>
      <div className="triangle" />
      <button
        className="btn"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={
          tokenCheck()
            ? () => {
                SignOut(() => {
                  window.location.href = "/";
                });
              }
            : () => {
                navigate("/admin/certification");
                setAdmin(false);
              }
        }
      >
        {tokenCheck() ? "Sign out" : <MdOutlineAdminPanelSettings size={20} />}
      </button>
    </AdminSignContainer>
  );
};

export default AdminSign;
