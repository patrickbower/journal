import React from "react";
import Contents from "../components/Contents/Contents";

/**
 * @function ContentsContainer
 * Reconstruct data modal for faster, cleaner and
 * easier use throughout life-cycles.
 *
 * @param {object} data - cards dataset
 */
const ContentsContainer = ({ data }) => {
  /**
   * @function splitYears
   * Get unique years and create a new model for each
   */
  const splitYears = () => {
    const years = [...new Set(data.map(card => card.dateYear))];

    const yearsArray = years.map(year => {
      const yearEntries = {
        year: year,
        entries: data.filter(card => card.dateYear === year)
      };

      return yearEntries;
    });
    return yearsArray;
  };

  /**
   * @function splitMonths
   * Get unique months and create a new model for each
   *
   * @param {array} entries
   */
  const splitMonths = entries => {
    const months = [...new Set(entries.map(entry => entry.dateMonth))];

    const monthsArray = months.map(month => {
      const monthEntries = {
        monthName: month,
        entries: entries.filter(entry => entry.dateMonth === month)
      };

      return monthEntries;
    });

    return monthsArray;
  };

  /**
   * @function generateDataSet
   * Construct new data modal using entries and remove preexisting
   */
  const generateDataSet = () => {
    const yearsArray = splitYears();
    return yearsArray.map(year => {
      year.months = splitMonths(year.entries);
      delete year.entries;
      return year;
    });
  };

  /**
   * @return
   * Render block for each year
   */
  return generateDataSet().map((year, index) => {
    return <Contents data={year} key={index} />;
  });
};

export default ContentsContainer;
