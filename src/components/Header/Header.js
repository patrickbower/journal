import React, { Fragment } from "react";
import Brand from "../Brand/Brand";
import style from "./Header.module.css";

const Header = () => (
  <header className={style.header}>
    <Brand />
  </header>
);

export default Header;
