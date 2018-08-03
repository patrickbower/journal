import React from "react";
import ContentsBlock from "../ContentsBlock/ContentsBlock";
import style from "./Contents.module.css";

/**
 * @function Contents
 * List of all entries
 *
 * @param {array} data - dataset
 */
const Contents = ({ data }) => (
  <main>
    <article className={style.article}>
      <ContentsBlock data={data} />
    </article>
  </main>
);

export default Contents;
