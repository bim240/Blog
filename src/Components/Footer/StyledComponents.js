import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.secondaryBackground};
  a {
    margin: 0;
    padding: 0;
  }
  a .icon {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: ${(props) => props.theme.text};
  }
`;
