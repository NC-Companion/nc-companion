import React from "react";
import PT from "prop-types";

class NewsStory extends React.Component {
  render() {
    const { selectEvent, title, index, imageUrl } = this.props;
    // imageUrl is an array
    return (
      <section className="newsStory box" onClick={() => {selectEvent(index)}}
        style={{background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${imageUrl[0]})`, backgroundSize: "cover"}}>
        <section className="" style={{ height: "80%" }} />
        <section className="newsStoryTitle">
          <span className="storyHeader has-text-white is-size-5 has-text-weight-bold">{title}</span>
        </section>
      </section>
    );
  }
}

NewsStory.propTypes = {
  selectStory: PT.func.isRequired,
  title: PT.string.isRequired,
  index: PT.number.isRequired,
  imageUrl: PT.string
};

export default NewsStory;
