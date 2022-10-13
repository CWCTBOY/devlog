import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { SignIn } from "../../../certificate/temporalCertification";
import Loading from "../../common/loading";
import SignForm from "./form";

const CertificationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CertificationProps {
  id: string;
  pw: string;
}

const Certificated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39f618;
  animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 1s forwards;
`;

const Certification = () => {
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState<CertificationProps>({
    id: "",
    pw: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev: CertificationProps) => ({ ...prev, [name]: value }));
  };
  /**
   * @description 인증 애니메이션 구현 및 인증 로직 [임시]
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      SignIn();
      setLoading(false);
      setIsAdmin(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }, 2000);
  };
  return (
    <>
      {loading && <Loading />}
      <CertificationContainer>
        {isAdmin && (
          <Certificated>
            <MdVerified size={50} />
          </Certificated>
        )}
        {!isAdmin && !loading ? (
          <SignForm onChange={onChange} onSubmit={onSubmit} />
        ) : null}
      </CertificationContainer>
    </>
  );
};

export default Certification;
