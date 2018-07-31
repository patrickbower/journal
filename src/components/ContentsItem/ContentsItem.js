import React from "react";
import { Link } from "react-router-dom";
import style from "./ContentsItem.module.css";

/**
 * @function ContentsItem
 * @param {name} string - title
 */
const ContentsItem = ({ name, date, id }) => (
  <li>
    <Link
      to={{
        pathname: "/article",
        hash: `#${id}`
      }}
      className={style.link}
    >
      {name} <span className={style.date}>{date}</span>
    </Link>
  </li>
);

export default ContentsItem;
