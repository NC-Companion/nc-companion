import React from "react";
import NewsStory from "./NewsStory";
import FilterButtons from "./Filter-buttons";
import NewsStoryOverlay from "./NewsStoryOverlay";

import { queries } from "../firebase";

class NewsStories extends React.Component {
  state = {
    loading: true,
    stories: [],
    storyIndex: null
  };

  componentDidMount() {
    queries.getAllStories(storiesById => {
      const stories = Object.entries(storiesById).map(([id, story]) => {
        story.id = id;
        return story;
      });

      this.setState({ loading: false, stories });
    });
  }

  render() {
    const { storyIndex, stories, loading } = this.state;
    const story = stories[storyIndex];
    return (
      <section className="newsFeedBody">
        <NewsStoryOverlay {...story} />
        <section className="searchFilter">
          <section className="inputField">
            <input className="input" type="text" placeholder="Search news..." />
          </section>
          <FilterButtons />
        </section>
        <section className="newsStories section">
          {stories.map((story, i) => (
            <NewsStory
              key={story.id}
              index={i}
              selectStory={this.selectStory}
              {...story}
            />
          ))}
        </section>
      </section>
    );
  }

  selectStory = storyIndex => {
    this.setState({ storyIndex });
  };
}

export default NewsStories;
