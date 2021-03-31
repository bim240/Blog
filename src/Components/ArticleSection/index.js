import NavBar from "Components/NavBar";
import { StyledArticleSection, StyledMarkDown } from "./StyledComponents";
import allData from "Data";
import { useState } from "react";
import gfm from "remark-gfm";
import "github-markdown-css";
import { withRouter } from "react-router";

const ArticleSection = (props) => {
  const { theme, setSelectedArticle, selectedArticle } = props;

  const currentLocation =
    props.location.pathname !== "/" ? props.location.pathname : false;

  const [mdFile, setMdFile] = useState();

  const getAddress = () => {
    if (selectedArticle.index1) {
      return allData[selectedArticle.index1]?.articles[selectedArticle.index2]
        ?.content;
    } else if (currentLocation && currentLocation.split("@").length >= 2) {
      let location = currentLocation.split("@");
      console.log(location[0].split("/")[1]);
      return allData[location[0].split("/")[1]]?.articles[location[1]]?.content;
    }
    return allData[0]?.articles[0]?.content;
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
        {selectedArticle?.index2 ? (
          <p>
            {allData[selectedArticle.index1]?.name +
              " / " +
              allData[selectedArticle.index1]?.articles[selectedArticle.index2]
                ?.heading}
          </p>
        ) : (
          <p> {allData[0]?.name + " / " + allData[0]?.articles[0]?.heading}</p>
        )}
        {mdFile && (
          <StyledMarkDown
            plugins={[gfm]}
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

export default withRouter(ArticleSection);
