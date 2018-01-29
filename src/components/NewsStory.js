import React from "react";
import PT from "prop-types";

class NewsStory extends React.Component {
  render() {
    const { selectStory, title, index, img_url } = this.props;
    return (
      <section className="newsStory box" onClick={() => {selectStory(index), (document.getElementById("overlay").style.display = "block");}}
        style={{background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${img_url})`, backgroundSize: "cover"}}>
        <section className="" style={{ height: "80%" }} />
        <section className="newsStoryTitle">
          <span className="storyHeader has-text-white is-size-6">{title}</span>
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
