import React from "react";
import showdown from "showdown";
import { Link } from "react-router-dom";
import style from "./Article.module.css";

/**
 * @function Article
 * Render the article on page
 *
 * @param {object} card data
 */

function parseMD(markdown) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);
  return { __html: html };
}

const Article = ({ data }) => (
  <main>
    <article>
      <h1>{data.name}</h1>
      <div
        className={style.markdownBody}
        dangerouslySetInnerHTML={parseMD(data.desc)}
      />
    </article>
    <Link to="/">Home</Link>
  </main>
);

export default Article;
