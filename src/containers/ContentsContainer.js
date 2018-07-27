import React, { Component } from "react";
import ContentsBlock from "../components/ContentsBlock";

class ContentsContainer extends Component {
  splitYears() {
    const { data } = this.props;
    const years = [...new Set(data.map(card => card.dateYear))];

    const yearsArray = years.map(year => {
      const yearEntries = {
        year: year,
        entries: data.filter(card => card.dateYear === year)
      };

      return yearEntries;
    });
    return yearsArray;
  }

  splitMonths(entries) {
    const months = [...new Set(entries.map(entry => entry.dateMonth))];

    const monthsArray = months.map(month => {
      const monthEntries = {
        monthName: month,
        entries: entries.filter(entry => entry.dateMonth === month)
      };

      return monthEntries;
    });

    return monthsArray;
  }

  generateDataSet() {
    const yearsArray = this.splitYears();
    return yearsArray.map(year => {
      year.months = this.splitMonths(year.entries);
      delete year.entries;
      return year;
    });
  }

  render() {
    const data = this.generateDataSet();
    return data.map((year, index) => {
      return <ContentsBlock data={year} key={index} />;
    });
  }
}

export default ContentsContainer;
