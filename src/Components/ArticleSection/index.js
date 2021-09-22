import NavBar from 'Components/NavBar';
import { StyledArticleSection, StyledMarkDown } from './StyledComponents';
import allData from 'Data';
import { useState } from 'react';
import gfm from 'remark-gfm';
import 'github-markdown-css';
import { withRouter } from 'react-router';
import { getArticleSection } from 'utils/getArticleSection';

const ArticleSection = (props) => {
  const { theme, setSelectedArticleId, selectedArticleId } = props;

  const currentLocation = props.location.pathname !== '/' ? props.location.pathname : false;
  let location = currentLocation && currentLocation.split('@');
  const articleSection = getArticleSection(selectedArticleId || location);

  const [mdFile, setMdFile] = useState();

  const getAddress = () => {
    if (articleSection) {
      return allData[articleSection.toLocaleLowerCase()]?.articles?.find(
        (article) => article.id === selectedArticleId,
      )?.content;
    }
    return allData.react?.articles[0]?.content;
  };

  fetch(getAddress())
    .then((res) => res.text())
    .then((res) => setMdFile(res));

  return (
    <StyledArticleSection>
      <NavBar
        className='article_navbar'
        setSelectedArticleId={setSelectedArticleId}
        theme={theme}
      />
      <div className='single_article'>
        <p>{articleSection}</p>
        {mdFile && (
          <StyledMarkDown
            plugins={[gfm]}
            className={theme === 'light' ? 'markdown-body' : 'markdown-body markdown_override'}
            children={mdFile}
          />
        )}
      </div>
    </StyledArticleSection>
  );
};

export default withRouter(ArticleSection);
