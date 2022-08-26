import styled, { css } from "styled-components";

interface IContainer {
  padding: string;
  disabled?: boolean;
}

const disabled = css`
  cursor: not-allowed;
  filter: opacity(0.2);
`;

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.color.primary};
  padding: 0.5rem ${(props) => props.padding}rem;
  cursor: pointer;

  > span {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }

  ${(props) => props.disabled && disabled}
`;
