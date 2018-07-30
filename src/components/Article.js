import React from "react";

/**
 * @function Article
 * Render the article on page
 *
 * @param {object} card data
 */
const Article = ({ data }) => (
  <main>
    <article>
      <h1>{data.name}</h1>
      <p>{data.desc}</p>
    </article>
  </main>
);

export default Article;
