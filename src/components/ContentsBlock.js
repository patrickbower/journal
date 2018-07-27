import React, { Component } from "react";

class ContentsBlock extends Component {
  generateEntriesBlock(entries) {
    return entries.map(entry => {
      return <li key={entry.id}>{entry.name}</li>;
    });
  }

  generateMonthBlock() {
    const { data } = this.props;
    return data.months.map((month, index) => {
      return (
        <React.Fragment key={index}>
          <h2>{month.monthName}</h2>
          <ul>{this.generateEntriesBlock(month.entries)}</ul>
        </React.Fragment>
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="content-block">
        <h1>{data.year}</h1>
        {this.generateMonthBlock()}
      </div>
    );
  }
}

export default ContentsBlock;
