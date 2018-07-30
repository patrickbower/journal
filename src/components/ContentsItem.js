import React from "react";
import { Link } from "react-router-dom";

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
    >
      {name} <span style={{ display: "none" }}>{date}</span>
    </Link>
  </li>
);

export default ContentsItem;
