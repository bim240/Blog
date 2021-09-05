export function getArticleSection(articleId) {
  if (articleId) {
    switch (true) {
      case articleId.includes('python'):
        return 'Python';
      case articleId.includes('html') || articleId.includes('css'):
        return 'htmlcss';
      default:
        break;
    }
  }
  return false;
}
