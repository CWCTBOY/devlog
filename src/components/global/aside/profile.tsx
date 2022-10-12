import styled from "@emotion/styled";
import thumbnail from "../../../assets/aside_thumbnail.jpeg";
import {
  MdOutlineSchool,
  MdMailOutline,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
import { useState } from "react";
import AdminSign from "./adminSign";
import { tokenCheck } from "../../../certificate/temporalCertification";

const AsideProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  .thumbnail {
    width: 40%;
    aspect-ratio: 1/1;
    border-radius: ${({ theme }) => theme.borderRad.max};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -3px 5px 19px 5px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    z-index: 1;
    .profile {
      width: 100%;
    }
  }
  .description {
    width: 57%;
    height: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .head {
      display: flex;
      flex-direction: column;
      .adminCheckBox {
        display: flex;
        align-items: center;
      }
      .name {
        font-size: ${({ theme }) => theme.font.size.xxl};
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.color.white};
        margin: 0 5px 5px 0;
      }
      .type {
        font-size: ${({ theme }) => theme.font.size.m};
        font-weight: ${({ theme }) => theme.font.weight.medium};
        color: ${({ theme }) => theme.color.highlight};
        margin: 0 0 10px 0;
      }
    }
    .etcBox {
      .etc {
        display: flex;
        font-size: ${({ theme }) => theme.font.size.m};
        color: ${({ theme }) => theme.color.lightGray};
        margin: 5px 0 0 0;
        .text {
          margin-left: 5px;
        }
      }
    }
  }
`;

const AsideProfile = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <AsideProfileContainer>
      <div
        className="thumbnail"
        onClick={() => {
          setAdmin((prev: boolean) => !prev);
        }}
      >
        <img src={thumbnail} alt="thumbnail" className="profile" />
      </div>
      <div className="description">
        <div className="head">
          <div className="adminCheckBox">
            <span className="name">Daniel Park</span>
            {tokenCheck() && (
              <MdOutlineAdminPanelSettings size={24} color="#39F618" />
            )}
          </div>
          <span className="type">Back-end Developer</span>
        </div>
        <div className="etcBox">
          <div className="etc">
            <FaGitAlt />
            <span className="text">
              <a
                href="https://github.com/CWCTBOY"
                target="_blank"
                rel="noreferrer"
              >
                cwctboy
              </a>
            </span>
          </div>
          <div className="etc">
            <MdOutlineSchool />
            <span className="text">SNU of sci & tech</span>
          </div>
          <div className="etc">
            <MdMailOutline />
            <span className="text">qkrdlswo98@gmail.com</span>
          </div>
        </div>
        <AdminSign admin={admin} setAdmin={setAdmin} />
      </div>
    </AsideProfileContainer>
  );
};

export default AsideProfile;
