import React from "react";
import styled from "styled-components";

const Button = ({ className, value, onClick }) => {
  return (
    <BasicButton className={className} onClick={onClick}>
      {value}
    </BasicButton>
  );
};

export default Button;

const BasicButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  transition: 0.1s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  &.equals {
    grid-column: 3 / 5;
    background-color: rgb(243, 61, 29);
  }

  &.equals:hover {
    background-color: rgb(228, 39, 15);
  }
`;
