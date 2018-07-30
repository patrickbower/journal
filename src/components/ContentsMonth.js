import React from "react";
import ContentsItem from "./ContentsItem";

/**
 * @function generateEntriesBlock
 * @param {array} entries - list of entries
 */
function generateEntriesBlock(entries) {
  return entries.map(entry => {
    return <ContentsItem key={entry.id} name={entry.name} />;
  });
}

/**
 * @function ContentsMonth
 * @param {array} month - list of months with their entries
 */
const ContentsMonth = ({ month }) => (
  <React.Fragment>
    <h3>{month.monthName}</h3>
    <ul>{generateEntriesBlock(month.entries)}</ul>
  </React.Fragment>
);

export default ContentsMonth;
