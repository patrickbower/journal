import React from "react";
import { Link } from "react-router-dom";
import style from "./ContentsItem.module.css";

/**
 * @function ContentsItem
 * @param {name} string - title
 */
const ContentsItem = ({ name, date, friendlyURL }) => (
  <li>
    <Link
      to={{
        pathname: "/article",
        hash: `#${friendlyURL}`
      }}
      className={style.link}
    >
      <span className={style.name}>{name}</span>
      <span className={style.date}>{date}</span>
    </Link>
  </li>
);

export default ContentsItem;
