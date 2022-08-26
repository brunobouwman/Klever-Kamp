import React from "react";
import { Container } from "./styles";

interface IButton {
  content: string;
  padding: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ padding, content, onClick, disabled }) => {
  const handleClick = () => {
    if (onClick && !disabled) onClick();
  };

  return (
    <Container padding={padding} onClick={handleClick}>
      <span>{content}</span>
    </Container>
  );
};

export default Button;
