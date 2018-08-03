import React from "react";
import showdown from "showdown";
import style from "./Article.module.css";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

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
  <main className={style.main}>
    <div className={style.article}>
      <ArticleInfo data={data} />
      <article>
        <h1>{data.name}</h1>
        <div
          className={style.markdownBody}
          dangerouslySetInnerHTML={parseMD(data.desc)}
        />
      </article>
    </div>
  </main>
);

export default Article;
