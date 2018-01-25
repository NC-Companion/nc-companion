import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Calendar from "./Calendar";
import Home from "./Home";
import NewsStories from "./NewsStories";
import CreateNews from "./CreateNews";
import Lecture from './Lecture'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className="main">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/calendar" render={() => <Calendar />} />
            <Route exact path="/lecture" render={() => <Lecture />} />
            <Route exact path="/news" render={() => <NewsStories />} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
