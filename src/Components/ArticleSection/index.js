import NavBar from "Components/NavBar";
import { StyledArticleSection, StyledMarkDown } from "./StyledComponents";
import ReactMarkdown from "react-markdown";
import javaScript from "Data/JavaSecript";
import Variable from "Data/JavaSecript/variable.md";
import { useState } from "react";

const ArticleSection = (props) => {
  const { theme } = props;
  const [mdFile, setMdFile] = useState();
  fetch(Variable)
    .then((res) => res.text())
    .then((res) => setMdFile(res));
  return (
    <StyledArticleSection>
      <NavBar className="article_navbar" theme={theme} />
      <div className="single_article">
        {mdFile && <StyledMarkDown className="markdown" children={mdFile} />}
      </div>
    </StyledArticleSection>
  );
};

export default ArticleSection;
