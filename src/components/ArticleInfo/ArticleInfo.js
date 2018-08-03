import React from "react";
import style from "./ArticleInfo.module.css";

/**
 * @function ArticleInfo
 * Publishing information about the current article
 *
 */

const ArticleInfo = props => {
  return (
    <p className={style.infoText}>
      Published {props.data.dateDay}
      {props.data.dateOrdinal} {props.data.dateMonth}
    </p>
  );
};

export default ArticleInfo;
