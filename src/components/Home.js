import React from "react";
import { Link } from "react-router-dom";
import NewsSearch from "./News-search";
import NewsStories from './NewsStories';
import Whiteboard from './Whiteboard';
import Weather from './Weather';
import "./Home.css";


class Home extends React.Component {

  render() {
    return (
      <section className="homeMain section">
        <section className="homeContent columns">
          <section className="events homeSection column is-one-third notification is-light">
          <NewsStories />
          </section>
          <section className="homeSection column has-text-center is-two-third notification is-dark">
            <Weather />
            <h2 className="title">Hello Jasmine.</h2>
            <h3 className="subtitle">Have a great day </h3>
            <h3 className="subtitle">You are on Week 3 </h3>
          <p>whiteboard</p>
          <Whiteboard />
          </section>
        </section>
      </section>
    );
  }
}


export default Home;
