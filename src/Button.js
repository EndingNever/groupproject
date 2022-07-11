import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  color: gray;
  background: red;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  border-radius: 100px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
