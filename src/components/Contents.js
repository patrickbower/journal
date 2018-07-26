import React, { Component } from "react";

class Contents extends Component {
  generateContentsList() {
    const { data } = this.props;
    return data.map(card => {
      console.log(card);
      return (
        <li key={card.id}>
          {card.name}
          <p>
            {card.dateWeekday} {card.dateDay}
            {card.dateOrdinal}
          </p>
        </li>
      );
    });
  }

  render() {
    return <ul className="contents-list">{this.generateContentsList()}</ul>;
  }
}

export default Contents;
