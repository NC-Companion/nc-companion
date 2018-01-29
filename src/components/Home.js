import React from "react";
import {Link} from "react-router-dom";
import NewsSearch from "./News-search";
import NewsStories from './NewsStories';
import Whiteboard from './Whiteboard';
import Weather from './Weather';
import fetchQuote from './api/fetchQuote'
import YoutubeVideo from './Youtube'
import "./Home.css";

class Home extends React.Component {

  state = {
    quote: {
      body: '',
      author: ''
    }
  }

  componentDidMount() {
    fetchQuote().then(res => this.setState({
      quote: {
        body: res.quote,
        author: res.author
      }
    }))
  }

  render() {
    return (
      <section className="homeMain height100">
        <section className="homeContent columns height100">
          <section className="homeLeft column is-one-third isDark section">
            <section>
              <NewsStories/>
            </section>
          </section>
          <section className="column is-two-third isWhite section">
            <section className=''>
              <section><Weather/></section>
              <section className='defaultPadding'>
                <h2 className="title homePageGreeting">
                  <span className='has-text-danger'>Hello</span> Alex.</h2>
                <h3 className="subtitle is-size-5">You are on Week 3.</h3>
                <span className='content'>
                  <blockquote className="subtitle">
                    <span className='is-size-5 is-italic'>{`"${this.state.quote.body}"`}</span>
                    <span className='is-size-4 has-text-weight-bold has-text-danger'>{` - ${this.state.quote.author}`}</span>
                  </blockquote>
                </span>
              </section>
            </section>
            <section className='columns'>
              <section className='column is-one-third'>
                <section className='button is-Dark'>Calendar</section>
                <Whiteboard/>
              </section>
              <section className='column is-two-third'>
                {/* <YoutubeVideo /> */}
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Home;
