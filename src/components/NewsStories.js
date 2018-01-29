import React from "react";
import NewsStory from "./NewsStory";
import NewsSearch from "./News-search";

import {getAllEvents} from '../firebase/queries/queryEvents';
import {queries} from "../firebase/";

import './NewsStories.css'

class NewsStories extends React.Component {
  state = {
    loading: true,
    events : [],
    eventIndex: null,
    search: ""
  };

  componentDidMount() {
    getAllEvents() 
    .then(res=>{
      const events = Object
        .entries(res.val())
        .map(([id, event]) => {
          event.id = id;
          return event;
        });      
      this.setState({loading: false, events});
    })
    .catch(console.log);
  }
  render() {
    const {events, loading} = this.state;
    // why create story ?
    // const story = stories[storyIndex];
    var matchedEvents = [];
    if(events.length > 0) {
      matchedEvents = events.filter(event => {
        return event.tag
          ? `${event
            .tag
            .join(" ")
            .toLowerCase()} ${event
            .title
            .toLowerCase()}`
            .indexOf(this.state.search) !== -1
          : null;
      });
    }

    return (
      <section className="newsFeedBody">
        <section className="searchFilter">
          <NewsSearch handleChange={this.handleChange}/>
        </section>
        <section className='eventsHolder section customScroll'>
          {matchedEvents && matchedEvents.map((event, i) => (<NewsStory key={event.id} index={i} selectEvent={this.selectEvent} {...event}/>))}
        </section>
      </section>
    );
  }

  handleChange = event => {
    this.setState({
      search: event
        .target
        .value
        .toLowerCase()
    });
  };
// why creATed this ? map is maping through all the stories
  selectEvent = eventIndex => {
    this.props.viewEvent(this.state.events[eventIndex]);
  };
}

export default NewsStories;
