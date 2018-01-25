import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <section className="twoHalves">
          <div className="left-half">
            <Link to="/newsfeed">
              <h1 className="subtitle">News Feed</h1>
            </Link>
          </div>
          <div className="right-half">
            <Link to="/calendar">
              <h1 className="subtitle">Calendar</h1>
            </Link>
          </div>
        </section>
      </section>
    );
  }
}

export default Home;
