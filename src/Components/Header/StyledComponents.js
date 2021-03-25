import styled from "styled-components";

export const NavBarWrapper = styled.section`
  width: 100%;
  height: 4rem;
  background: ${(props) => props.theme.secondaryBackground};
  .container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img {
      width: 3rem;
      margin-right: 1rem;
    }
    h1 {
      color: ${(props) => props.theme.text};
      margin: 0;
      padding: 0;
      font-size: 2rem;
      font-weight: 900;
    }
  }
`;
