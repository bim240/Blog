import NavBar from "Components/NavBar";
import { StyledArticleSection } from "./StyledComponents";

const ArticleSection = (props) => {
  const { theme } = props;
  return (
    <StyledArticleSection>
      <NavBar className="article_navbar" theme={theme} />
      <div className="single_article"> hello</div>
    </StyledArticleSection>
  );
};

export default ArticleSection;
