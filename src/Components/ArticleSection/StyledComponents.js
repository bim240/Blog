import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const StyledArticleSection = styled.section`
  width: 90%;
  margin: 1rem auto;
  padding-bottom: 5rem;
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
  .markdown_override {
    color: ${(props) => props.theme.secondaryText} !important;
    table {
      tr {
        background: ${(props) => props.theme.secondaryBackground};
      }
    }
    code {
      background: ${(props) => props.theme.secondaryBackground};
    }
    pre {
      background: #051529;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    code,
    ol,
    li,
    ul {
      line-height: 1.7777777778;
      letter-spacing: 1.01;
      color: #a7a7a7;
    }
    p {
      font-size: 1.125rem;
    }
    @media (max-width: 800px) {
      p,
      li {
        font-size: 16px;
      }
    }
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

export const StyledMarkDown = styled(ReactMarkdown)`
  // max-width: 800px;
  // margin: auto;

  font-family: Tahoma, Verdana, Segoe, sans-serif;
  background: ${(props) => props.theme.articleBackground};
  color: ${(props) => props.theme.text};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  code,
  ol,
  li,
  ul {
    color: ${(props) => props.theme.text};
    line-height: 1.7777777778;
    letter-spacing: 1.01;
  }
  p {
    font-size: 1.125rem;
  }
  @media (max-width: 800px) {
    p,
    li {
      font-size: 16px;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    pre {
      width: 250px;
      margin: 0 auto;
    }
  }
  @media (max-width: 450px) {
    table {
      width: 370px;
    }
  }
  @media (max-width: 399px) {
    table {
      width: 350px;
    }
  }
  @media (max-width: 349px) {
    table {
      width: 300px;
    }
  }
  @media (max-width: 299px) {
    table {
      width: 250px;
    }
  }
`;
