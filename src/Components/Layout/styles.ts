import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  position: fixed;
  background: ${(props) => props.theme.background};
  z-index: 10;
  top: 0;

  img {
    height: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  padding: 0.2rem;
`;

export const LogoExtension = styled.div`
  display: flex;
  height: 2.5rem;
  justify-content: center;
  align-items: flex-end;

  > h2 {
    margin-bottom: 0.2rem;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(-35px);
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3pxrgba (0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.2rem;
  border-radius: 0.75rem;
  background: ${(props) => props.theme.color.selection};
`;

interface ISelection {
  selected: boolean;
}

const selected = css`
  background: ${(props) => props.theme.background};
  > span {
    filter: opacity(1);
  }
`;

const hover = css`
  background: rgba(11, 11, 30, 0.2);
  > span {
    filter: opacity(1);
  }
`;

export const Selection = styled.div<ISelection>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.2s;

  > span {
    filter: opacity(0.7);
  }

  &:hover {
    ${(props) => !props.selected && hover};
  }

  ${(props) => props.selected && selected};
`;
