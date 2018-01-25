import React from "react";
import PT from "prop-types";

class NewsStoryOverlay extends React.Component {
  render() {
    const { title, img_url, author, tags, body } = this.props;
    return (
      <section id="overlay" className="">
          <span className="quit is-pulled-right button is-rounded is-outlined is-danger" onClick={() => (document.getElementById("overlay").style.display = "none")}>
              <i className="fa fa-times is-size-4" aria-hidden="true" />
          </span>
          <section id="overlayTitle" className="title has-text-danger">
          {title}
          </section>
          <section className="overlayImage">
            <img src={img_url} alt="news" style={{ margin: "auto", maxHeight: "50vh" }} />
          </section>
          <section className="overlayBody has-text-white">
            {body}
          </section>
          <section id="author" className="subtitle is-size-6 has-text-white">
            By: {author || "NC Admin"}
          </section>
          <section className="tags">
          {tags && tags.map((tag, i ) => {
            return <section className="button is-primary is-rounded is-outlined" id="singleTag" key={i}>
            #{tag}
          </section>
          })}
          </section>
        
      </section>
    );
  }
}

NewsStoryOverlay.propTypes = {
  title: PT.string,
  imageUrl: PT.string,
  author: PT.string
};

export default NewsStoryOverlay;
