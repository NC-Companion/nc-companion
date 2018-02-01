import React from "react";

import withAuthorization, { authCondition } from "../auth/withAuthorization";
import NewsStories from "../Announcements/NewsStories";
import NewsStoryOverlay from "../Announcements/NewsStoryOverlay";
import WelcomeMessage from './Welcome-message';
import HomeButtons from './Home-buttons';
import Quotes from './Quotes';
import Whiteboard from "./Whiteboard";
import Weather from "./Weather";
import {whiteBoard} from '../../firebase/queries/queryEvents';
import fetchQuote from "../../helpers/fetchQuote";
import "./Home.css";

// import randomEventGenerator from '../../seed/seedEvents';

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
      // console.log('***', res);
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
              <WelcomeMessage authUser={this.props.authUser}/>
            </section>
            <section className='homeDashNav title'>
              <HomeButtons />
            </section>
            <section className="homeDashContent columns">
              <section className="column is-half">
                <Quotes quote={this.state.quote}/>
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
