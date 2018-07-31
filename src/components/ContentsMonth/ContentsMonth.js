import React from "react";
import ContentsItem from "../ContentsItem/ContentsItem";
import style from "./ContentsMonth.module.css";

/**
 * @function generateEntriesBlock
 * @param {array} entries - list of entries
 */
function generateEntriesBlock(entries) {
  return entries.map(entry => {
    const date = `${entry.dateWeekday} ${entry.dateDay}${entry.dateOrdinal}`;
    return (
      <ContentsItem
        key={entry.id}
        name={entry.name}
        date={date}
        id={entry.id}
      />
    );
  });
}

/**
 * @function ContentsMonth
 * @param {array} month - list of months with their entries
 */
const ContentsMonth = ({ month }) => (
  <React.Fragment>
    <h3 className={style.heading}>{month.monthName}</h3>
    <ul className="list-reset">{generateEntriesBlock(month.entries)}</ul>
  </React.Fragment>
);

export default ContentsMonth;
