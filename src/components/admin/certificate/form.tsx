import styled from "@emotion/styled";
import { MdOutlineVpnKey } from "react-icons/md";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    width: 150px;
    height: 25px;
    padding: 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    margin: 0 0 10px 0;
    text-indent: 5px;
    color: ${({ theme }) => theme.color.white};
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  .certificate {
    border: none;
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.white};
    background-color: transparent;
    cursor: pointer;
  }
`;

const SignForm = ({
  onSubmit,
  onChange,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <input
        type="email"
        name="id"
        className="input"
        placeholder="ID"
        onChange={onChange}
      />
      <input
        type="password"
        name="pw"
        className="input"
        placeholder="Password"
        onChange={onChange}
      />
      <button className="certificate">
        <MdOutlineVpnKey size={20} />
      </button>
    </Form>
  );
};

export default SignForm;
