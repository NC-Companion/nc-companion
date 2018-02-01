import React from "react";
import PT from "prop-types";

class NewsStory extends React.Component {
  render() {
    // console.log('Props',this.props)
    const { selectEvent, title, index } = this.props;
    // const inlineStyle = { background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${imageUrl[0]})`, backgroundSize: "cover" }
    const altInlineStyle = { background: `rgb(255,255,255)` }
    return (
      <section className="newsStory box" onClick={() => { selectEvent(index) }}
        style={altInlineStyle}>
        <img src={this.props.imageUrl[0]} alt="storyImage"/>
        <section className="" style={{ height: "80%" }} />
        <section className="newsStoryTitle">
          <span className="storyHeader has-text-dark subtitle">{title}</span>
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
