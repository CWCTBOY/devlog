import styled from "@emotion/styled";
import thumbnail from "../../../assets/aside_thumbnail.jpeg";
import { MdOutlineSchool, MdMailOutline, MdVerified } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
import { useState } from "react";
import AdminSign from "./adminSignBtn";
import { tokenCheck } from "../../../hooks/certificate/temporalCertification";
import { transition } from "../../../styles/global/animation";

const AsideProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  .hidden {
    aspect-ratio: 1 / 1;
    position: absolute;
    top: -2px;
    left: -2px;
    border-radius: inherit;
    padding: 0;
    opacity: 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
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
      width: 105%;
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
        position: relative;
        .name {
          font-size: ${({ theme }) => theme.font.size.xxl};
          font-weight: ${({ theme }) => theme.font.weight.bold};
          color: ${({ theme }) => theme.color.white};
          margin: 0 5px 5px 0;
        }
        .isCertificated {
          position: absolute;
          top: 0.5px;
          left: 135px;
        }
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
        color: ${({ theme }) => theme.color.white};
        margin: 5px 0 0 0;
        transition: ${transition};
        &:nth-of-type(2) {
          &:hover {
            color: ${({ theme }) => theme.color.highlight};
          }
        }
        .text {
          margin-left: 5px;
        }
      }
    }
  }
`;

const AsideProfile = () => {
  const [admin, setAdmin] = useState(false);
  const onFocus = () => {
    setAdmin(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setAdmin(false);
    }, 100);
  };
  return (
    <AsideProfileContainer>
      <div className="thumbnail">
        <input
          type="text"
          className="hidden"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <img src={thumbnail} alt="thumbnail" className="profile" />
      </div>
      <div className="description">
        <div className="head">
          <div className="adminCheckBox">
            <span className="name">Daniel Park</span>
            {tokenCheck() && (
              <span className="isCertificated">
                <MdVerified size={24} color="#39F618" />
              </span>
            )}
          </div>
          <span className="type">Back-end Developer</span>
        </div>
        <div className="etcBox">
          <div className="etc">
            <MdOutlineSchool />
            <span className="text">SNUST</span>
          </div>
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
