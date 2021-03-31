import styled from "styled-components";

export const HeaderWrapper = styled.section`
  position: sticky;
  top: 0;
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
    @media (max-width: 800px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  .toggle_btn {
    margin-right: 1rem;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.secondaryBackground};
  }
  .header_navbar {
    width: 300px;
    display: none;
  }
  .absolute_navbar {
    position: absolute;
    top: 4rem;
    left: 0;
  }
  @media (max-width: 1000px) {
    .container {
      width: 100%;
      padding: 1rem;
    }
    img {
      display: none;
    }
    .header_navbar {
      display: block;
    }
  }

  @media (min-width: 1000.1px) {
    .container {
      padding: 0rem;
    }
    img {
      display: block;
    }
    .header_navbar {
      display: block;
    }
    .toggle_btn {
      display: none;
    }
    .header_navbar {
      display: none;
    }
  }
`;
