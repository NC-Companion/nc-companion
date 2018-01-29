import React from "react";
import NewsStory from "./NewsStory";
import NewsSearch from "./News-search";

import {queries} from "../firebase/";

import './NewsStories.css'

class NewsStories extends React.Component {
  state = {
    loading: true,
    stories: [],
    storyIndex: null,
    search: ""
  };

  componentDidMount() {
    queries.getAllStories(storiesById => {
      const stories = Object
        .entries(storiesById)
        .map(([id, story]) => {
          story.id = id;
          return story;
        });
      this.setState({loading: false, stories});
    });
  }
  render() {
    const {storyIndex, stories, loading} = this.state;
    const story = stories[storyIndex];

    let matches = stories.filter(story => {
      return story.tags
        ? `${story
          .tags
          .join(" ")
          .toLowerCase()} ${story
          .title
          .toLowerCase()}`
          .indexOf(this.state.search) !== -1
        : null;
    });

    return (
      <section className="newsFeedBody">
        <section className="searchFilter">
          <NewsSearch handleChange={this.handleChange}/>
        </section>
        <section className='eventsHolder section customScroll'>
          {matches.map((story, i) => (<NewsStory key={story.id} index={i} selectStory={this.selectStory} {...story}/>))}
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

  selectStory = storyIndex => {
    this.props.viewStory(this.state.stories[storyIndex]);
  };
}

export default NewsStories;
