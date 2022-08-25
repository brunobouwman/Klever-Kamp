import styled from "styled-components";

interface IContainer {
  padding: string;
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.color.primary};
  padding: 0.5rem ${(props) => props.padding}rem;

  > span {
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }
`;
