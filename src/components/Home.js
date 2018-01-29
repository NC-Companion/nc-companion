import React from "react";
import { Link } from "react-router-dom";

import withAuthorization, { authCondition } from "./auth/withAuthorization";
import NewsSearch from "./News-search";
<<<<<<< HEAD
import NewsStories from "./NewsStories";
import Whiteboard from "./Whiteboard";
import Weather from "./Weather";

import fetchQuote from "../helpers/fetchQuote";
import NewsStoryOverlay from "./NewsStoryOverlay";
=======
import NewsStories from './NewsStories';
import Whiteboard from './Whiteboard';
import Weather from './Weather';
import fetchQuote from './api/fetchQuote'
import NewsStoryOverlay from './NewsStoryOverlay';
>>>>>>> f038203be556adc2589ee6963c0aae796371e732
import "./Home.css";

class Home extends React.Component {
  state = {
    quote: {
<<<<<<< HEAD
      body: "",
      author: ""
    },
    board: [
      {
        time: "09:45",
        body: "Lecture on React."
      },
      {
        time: "13:00",
        body: "Lunch."
      },
      {
        time: "12:00",
        body: "Work on sprint."
      },
      {
        time: "14:40",
        body: "Show & tell & beer."
      }
    ],
    activeEvent: {}
  };
=======
      body: '',
      author: ''
    },
    board: [
      {
        time: '09:45',
        body: 'Lecture on React.'
      }, {
        time: '13:00',
        body: 'Lunch.'
      }, {
        time: '12:00',
        body: 'Work on sprint.'
      }, {
        time: '14:40',
        body: 'Show & tell & beer.'
      }
    ],
    activeEvent: {}
  }
>>>>>>> f038203be556adc2589ee6963c0aae796371e732

  componentDidMount() {
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
      <section className="homeMain height100">
<<<<<<< HEAD
        {this.state.activeEvent.title && (
          <NewsStoryOverlay
            story={this.state.activeEvent}
            close={this.hideEvent}
          />
        )}
        <section className="homeContent columns height100">
          <section className="homeLeft column is-one-third isDark section">
            <section>
              <NewsStories viewStory={this.viewEvent} />
=======
        {this.state.activeEvent.title && <NewsStoryOverlay story={this.state.activeEvent} close={this.hideEvent} />}
        <section className="homeContent columns height100">
          <section className="homeLeft column is-one-third isDark section">
            <section>
              <NewsStories viewStory={this.viewEvent}/>
>>>>>>> f038203be556adc2589ee6963c0aae796371e732
            </section>
          </section>
          <section className="column is-two-third isWhite section">
            <section className="">
              <section>
                <Weather />
              </section>
              <section className="defaultPadding">
                <h2 className="title homePageGreeting">
<<<<<<< HEAD
                  <span className="has-text-danger">Hello</span> Alex.
                </h2>
=======
                  <span className='has-text-danger'>Hello</span> Alex.</h2>
>>>>>>> f038203be556adc2589ee6963c0aae796371e732
                <h3 className="subtitle is-size-4">You are on Week 3.</h3>
              </section>
            </section>
            <section className='homeDashNav title'>
              <section className='homeDashButtons'>
                <span className='button is-size-2 has-text-danger'>
                  <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                </span>
<<<<<<< HEAD
                <span className="button is-size-2 has-text-dark">
                  <i class="fab fa-github" aria-hidden="true" />
                </span>
                <span className="button is-size-2 has-text-danger">
                  <i class="fab fa-slack" aria-hidden="true" />
                </span>
                <span className="button is-size-2 has-text-dark">
                  <i class="fab fa-google" aria-hidden="true" />
                </span>
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
=======
                <span className='button is-size-2 has-text-dark'>
                  <i class="fab fa-github" aria-hidden="true"></i>
                </span>
                <span className='button is-size-2 has-text-danger'>
                  <i class="fab fa-slack" aria-hidden="true"></i>
                </span>
                <span className='button is-size-2 has-text-dark'>
                  <i class="fab fa-google" aria-hidden="true"></i>
                </span>
              </section>
            </section>
            <section className='homeDashContent columns'>
              <section className='column is-half'>
                <span className='content'>
                  <blockquote className="subtitle">
                    <span className='is-size-5 is-italic'>{`"${this.state.quote.body}"`}</span>
                    <span className='is-size-4 has-text-weight-bold has-text-danger'>{` - ${this.state.quote.author}`}</span>
                  </blockquote>
                </span>
              </section>
              <section className='column is-half'>
                <Whiteboard content={this.state.board}/>
>>>>>>> f038203be556adc2589ee6963c0aae796371e732
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }

  viewEvent = event => {
<<<<<<< HEAD
    console.log(event);
    this.setState({
      activeEvent: event
    });
  };
  hideEvent = () => {
    this.setState({
      activeEvent: {}
    });
  };
=======
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
>>>>>>> f038203be556adc2589ee6963c0aae796371e732
}

export default withAuthorization(authCondition)(Home);
