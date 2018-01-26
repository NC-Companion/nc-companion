import React from "react";
import { Link } from "react-router-dom";
import NewsSearch from "./News-search";
import Header from "./Header";
import NewsStories from './NewsStories';
import Whiteboard from './Whiteboard';
import Weather from './Weather';
import "./Home.css";


class Home extends React.Component {

  render() {
    

    return (
      <section className="homeMain">
      <Header />
        <section className="home columns">
          <section className="events column is-one-third">
          
          <NewsStories />
          </section>
          <section className="middle column notification is-danger">
          <h2 className="title">Hi (Name)</h2>
          <h3 className="subtitle">Have a great day </h3>
          <h3 className="subtitle">You are on Week 3 </h3>
          <Weather />
          </section>
          <section className="whiteBoard column">
          <p>whiteboard</p>
          <Whiteboard />
          </section>
        </section>
      </section>
    );
  }



  
}


export default Home;
