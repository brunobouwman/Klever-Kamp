import React from "react";
import { Container } from "./styles";

interface IButton {
  content: string;
  padding: string;
}

const Button: React.FC<IButton> = ({ padding, content }) => {
  return (
    <Container padding={padding}>
      <span>{content}</span>
    </Container>
  );
};

export default Button;
