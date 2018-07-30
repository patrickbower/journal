import React from "react";
import Article from "../components/Article";

/**
 * @function ArticleContainer
 *
 * @param {object} data - cards dataset
 */
const ArticleContainer = ({ data }) => {
  const getArticle = () => {
    const hash = window.location.hash.substr(1);
    const match = data.filter(card => {
      return card.id === hash;
    });
    return match.pop();
  };

  /**
   * @return
   * Render Article that matches the id in the url hash
   */
  return <Article data={getArticle()} />;
};

export default ArticleContainer;
