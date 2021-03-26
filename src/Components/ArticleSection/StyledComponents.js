import styled from "styled-components";

export const StyledArticleSection = styled.section`
  width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
  justify-items: start;
  align-items: start;
  .single_article {
    border-radius: 7px;
    background: ${(props) => props.theme.articleBackground};
    padding: 2rem;
    width: 100%;
  }
  .article_navbar {
    max-width: 325px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr;
    .article_navbar {
      display: none;
    }
    .single_article {
      padding: 1rem;
    }
  }
`;
