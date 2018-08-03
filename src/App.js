import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Days, Months, Ordinal } from "./utils/time";
import ContentsContainer from "./containers/ContentsContainer";
import ArticleContainer from "./containers/ArticleContainer";
import LinkHome from "./components/LinkHome/LinkHome";
import Header from "./components/Header/Header";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/global.css";
import style from "./App.module.css";

class App extends Component {
  state = {
    initialDataSet: undefined
  };

  /**
   * @function componentWillMount
   *
   * Calls to setup app
   */
  componentWillMount() {
    this.initialDataFetch();
  }

  /**
   * @function initialDataFetch
   *
   * Request data for first render
   */
  initialDataFetch() {
    // Get cards from published column on Trello
    fetch("https://api.trello.com/1/lists/5b5758ff527896cec9992dd6/cards")
      .then(response => {
        return response.json();
        // return DummyData;
      })
      .then(data => {
        // Hydrate and set
        this.setState({
          initialDataSet: this.hydrateData(data)
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  hydrateData(data) {
    // Create timestamp and time formats for each card
    data.forEach(card => {
      const { dateLastActivity } = card;
      card.timeStamp = Date.parse(dateLastActivity);
      card.dateYear = new Date(dateLastActivity).getFullYear();
      card.dateMonth = Months[new Date(dateLastActivity).getMonth()];
      card.dateWeekday = Days[new Date(dateLastActivity).getDay()];
      card.dateDay = new Date(dateLastActivity).getDate();
      card.dateOrdinal = Ordinal(card.dateDay);
    });

    // Sort cards by descending creation order
    data.sort((left, right) => {
      return right.timeStamp - left.timeStamp;
    });

    return data;
  }

  render() {
    if (this.state.initialDataSet) {
      return (
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <div className={style.column}>
                  <div className={style.header}>
                    <Header />
                  </div>
                  <div className={style.main}>
                    <ContentsContainer data={this.state.initialDataSet} />
                  </div>
                  <div className={style.nav} />
                </div>
              )}
            />
            <Route
              path="/article"
              render={routeProps => (
                <div className={style.column}>
                  <div className={style.header}>
                    <Header />
                  </div>
                  <div className={style.main}>
                    <ArticleContainer data={this.state.initialDataSet} />
                  </div>
                  <div className={style.nav}>
                    <LinkHome />
                  </div>
                </div>
              )}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
