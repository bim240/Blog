import NavBar from "Components/NavBar";
import { StyledArticleSection, StyledMarkDown } from "./StyledComponents";
import allData from "Data";
import { useState } from "react";
import "github-markdown-css";

const ArticleSection = (props) => {
  const { theme, setSelectedArticle, selectedArticle } = props;
  const [mdFile, setMdFile] = useState();
  const getAddress = () => {
    return allData[selectedArticle.index1]?.articles[selectedArticle.index2]
      ?.content;
  };
  fetch(getAddress())
    .then((res) => res.text())
    .then((res) => setMdFile(res));
  return (
    <StyledArticleSection>
      <NavBar
        className="article_navbar"
        setSelectedArticle={setSelectedArticle}
        theme={theme}
      />
      <div className="single_article">
        {mdFile && (
          <StyledMarkDown
            className={
              theme === "light"
                ? "markdown-body"
                : "markdown-body markdown_override"
            }
            children={mdFile}
          />
        )}
      </div>
    </StyledArticleSection>
  );
};

export default ArticleSection;
