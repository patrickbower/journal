import React, { Fragment } from "react";
import ContentsItem from "../ContentsItem/ContentsItem";
import style from "./ContentsMonth.module.css";
import StringToUrl from "../../utils/string-to-url";

/**
 * @function generateEntriesBlock
 * @param {array} entries - list of entries
 */
function generateEntriesBlock(entries) {
  return entries.map(entry => {
    const date = `${entry.dateWeekday} ${entry.dateDay}${entry.dateOrdinal}`;
    const friendlyURL = `${StringToUrl(entry.name)}-${entry.id}`;
    return (
      <ContentsItem
        key={entry.id}
        name={entry.name}
        date={date}
        friendlyURL={friendlyURL}
      />
    );
  });
}

/**
 * @function ContentsMonth
 * @param {array} month - list of months with their entries
 */
const ContentsMonth = ({ month }) => (
  <Fragment>
    <h3 className={style.heading}>{month.monthName}</h3>
    <ul className={style.list}>{generateEntriesBlock(month.entries)}</ul>
  </Fragment>
);

export default ContentsMonth;
