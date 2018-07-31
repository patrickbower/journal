import React from "react";
import ContentsMonth from "../ContentsMonth/ContentsMonth";
import style from "./ContentsBlock.module.css";
/**
 * @function ContentsBlock
 * @param {object} data - complete dataset
 */
function generateMonthBlock(data) {
  return data.months.map((month, index) => {
    return <ContentsMonth key={index} month={month} />;
  });
}

/**
 * @function ContentsBlock
 * @param {object} data - complete dataset
 */
const ContentsBlock = ({ data }) => (
  <section className="content-block">
    <h2 className={style.heading}>{data.year}</h2>
    {generateMonthBlock(data)}
  </section>
);

export default ContentsBlock;
