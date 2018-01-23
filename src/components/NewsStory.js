import React from "react";
import PT from "prop-types";

class NewsStory extends React.Component {
  render() {
    const { selectStory, title, index, imageUrl } = this.props;
    return (
      <section
        className="newsStory"
        onClick={() => {
          selectStory(index),
            (document.getElementById("overlay").style.display = "block");
        }}
        style={{
          background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${imageUrl})`,
          backgroundSize: "cover"
        }}
      >
        <section className="" style={{ height: "80%" }} />
        <section
          className=""
          style={{
            height: "20%",
            background: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6))"
          }}
        >
          <span
            className="storyHeader has-text-white is-size-4"
            style={{ marginLeft: "1vw" }}
          >
            {title}
          </span>
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
