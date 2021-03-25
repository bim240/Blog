import NavBar from "Components/NavBar";
import { StyledArticleSection } from "./StyledComponents";

const ArticleSection = (props) => {
  const { theme } = props;
  return (
    <StyledArticleSection>
      <NavBar theme={theme} />
      <div></div>
    </StyledArticleSection>
  );
};

export default ArticleSection;
