import React from "react";
import { Link } from "react-router-dom";
import style from "./LinkHome.module.css";

/**
 * @function HomeLink
 * Linkn to homepage
 */

const LinkHome = () => (
  <Link to="/" className={style.link}>
    Home
  </Link>
);

export default LinkHome;
