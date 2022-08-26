import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

export const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 2rem 1rem;
  border-radius: 8px;

  background: ${(props) => props.theme.color.selection};
`;
