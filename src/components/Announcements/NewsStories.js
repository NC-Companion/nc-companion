import React from "react";
import NewsStory from "./NewsStory";
import NewsSearch from "./News-search";

import {getAllEvents} from '../../firebase/queries/queryEvents';
import {queries} from "../../firebase/";

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
      return Object
        .entries(res.val())
        .map(([id, event]) => {
          event.id = id;
          return event;
        });  
    })
    .then(events =>{
      const filteredEvents = events.filter(event => {
        return event.type === 'announcements';
      })
      this.setState({loading: false, events:filteredEvents});
    })
    .catch(console.log);
  }


  render() {
    const {events, loading} = this.state;
    let matchedEvents = this.searchFilter(events, matchedEvents);

    return (
      <section className="newsFeedBody height100 hero">
        <section className="searchFilter hero-head">
          <NewsSearch handleChange={this.handleChange}/>
        </section>
        <section className='eventsHolder hero-body customScroll'>
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

  selectEvent = eventIndex => {
    this.props.viewEvent(this.state.events[eventIndex]);
  };

  searchFilter(events, matchedEvents) {
    if (events.length > 0) {
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
    return matchedEvents;
  };
}

export default NewsStories;
