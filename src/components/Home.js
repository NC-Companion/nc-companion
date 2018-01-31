import React from "react";
import { Link } from "react-router-dom";

import withAuthorization, { authCondition } from "./auth/withAuthorization";
import NewsSearch from "./News-search";
import NewsStories from "./NewsStories";
import Whiteboard from "./Whiteboard";
import Weather from "./Weather";
import {whiteBoard} from '../firebase/queries/queryEvents';
import fetchQuote from "../helpers/fetchQuote";
import NewsStoryOverlay from "./NewsStoryOverlay";
import "./Home.css";

import randomEventGenerator from '../seed/seedEvents';

class Home extends React.Component {
  state = {
    quote: {
      body: "",
      author: ""
    },
    board: [],
    activeEvent: {}
  };

  componentDidMount() {
    whiteBoard()
      .then(res => {
        console.log('***', res.length);
        this.setState({board:res});
      })
      .catch(console.log);
    fetchQuote().then(res =>
      this.setState({
        quote: {
          body: res.quote,
          author: res.author
        }
      })
    );
  }

  render() {
    return (
      <section className="home columns isWhite">
        {this.state.activeEvent.title && (
          <NewsStoryOverlay
            event={this.state.activeEvent}
            close={this.hideEvent}
          />
        )}
          <section className="homeLeft column is-one-third isDark section">
              <NewsStories viewEvent={this.viewEvent} />
          </section>
          <section className="column is-two-thirds isWhite section">
            <section className="">
              <section>
                <Weather />
              </section>
              <section className="defaultPadding">
                <h2 className="title homePageGreeting">
                  <span className="has-text-danger">Hello</span> {this.props.authUser.displayName ? this.props.authUser.displayName.split(' ')[0] : 'Northcoder'}.
                </h2>
                <h3 className="subtitle is-size-4">You are on Week 3.</h3>
              </section>
            </section>
            <section className='homeDashNav title'>
              <section className='homeDashButtons'>
                <Link to='/calendar'><a className='button is-size-2 has-text-danger'>
                  <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                </a></Link>
                <a target='_blank' href='http://www.github.com' className="button is-size-2 has-text-dark">
                  <i class="fab fa-github" aria-hidden="true" />
                </a>
                <a target='_blank' href='http://www.slack.com' className="button is-size-2 has-text-danger">
                  <i class="fab fa-slack" aria-hidden="true" />
                </a>
                <a target='_blank' href='http://www.google.co.uk' className="button is-size-2 has-text-dark">
                  <i class="fab fa-google" aria-hidden="true" />
                </a>
              </section>
            </section>
            <section className="homeDashContent columns">
              <section className="column is-half">
                <span className="content">
                  <blockquote className="subtitle">
                    <span className="is-size-5 is-italic">{`"${
                      this.state.quote.body
                    }"`}</span>
                    <span className="is-size-4 has-text-weight-bold has-text-danger">{` - ${
                      this.state.quote.author
                    }`}</span>
                  </blockquote>
                </span>
              </section>
              <section className="column is-half">
                <Whiteboard content={this.state.board} />
              </section>
            </section>
          </section>
      </section>
    );
  }

  viewEvent = event => {
    console.log(event)
    this.setState({
      activeEvent: event
    })
  }
  hideEvent = () =>{
    this.setState({
      activeEvent: {}
    })
  }
}

export default withAuthorization(authCondition)(Home);
