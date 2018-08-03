import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "../../icons/Logo";
import style from "./Brand.module.css";

const Brand = () => (
  <Link to="/">
    <Fragment>
      <div className={style.logo}>
        <Logo fill={"--colour-black"} width={40} height={40} />
      </div>
      <h1 className={style.title}>Journal</h1>
    </Fragment>
  </Link>
);

export default Brand;
