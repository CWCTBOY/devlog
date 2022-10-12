import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MdSettingsBackupRestore } from "react-icons/md";

const Loading = () => {
  const Componenet = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .load {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.color.white};
      animation: ${keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  `} 1s infinite;
    }
  `;
  return (
    <Componenet>
      <div className="load">
        <MdSettingsBackupRestore size={50} />
      </div>
    </Componenet>
  );
};

export default Loading;
