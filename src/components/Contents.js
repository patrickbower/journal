import React from "react";
import ContentsBlock from "./ContentsBlock";

/**
 * @function Contents
 * List of all entries
 *
 * @param {array} data - dataset
 */
const Contents = ({ data }) => (
  <main>
    <article>
      <ContentsBlock data={data} />
    </article>
  </main>
);

export default Contents;
