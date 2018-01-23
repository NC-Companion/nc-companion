import React from "react";
import PT from "prop-types";

class NewsStoryOverlay extends React.Component {
  render() {
    const { title, imageUrl, author } = this.props;
    return (
      <section
        id="overlay"
        style={{ overflow: "scroll", overflowX: "hidden" }}
        className=""
      >
        <section className="section">
          <section className="quit">
            <section
              className="is-pulled-right button is-rounded is-outlined is-danger"
              onClick={() =>
                (document.getElementById("overlay").style.display = "none")
              }
            >
              <i className="fa fa-times is-size-4" aria-hidden="true" />
            </section>
          </section>
          <section className="title has-text-danger">{title}</section>
          <section
            className="subtitle has-text-white"
            style={{ marginLeft: "1.5vw" }}
          >
            By: {author || "NC Admin"}
          </section>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2vw"
            }}
          >
            <img src={imageUrl} style={{ margin: "auto", maxHeight: "50vh" }} />
          </section>
          <section className="has-text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut eleifend libero. In et odio mollis, eleifend ex ut, tincidunt
            tellus. Curabitur mattis vestibulum scelerisque. Aenean hendrerit
            placerat auctor. Nunc magna mauris, iaculis et eleifend eget, mattis
            a diam. Morbi gravida lorem in urna sollicitudin, sed blandit sem
            efficitur. In eu ex at justo molestie malesuada. Sed lacinia mauris
            sed lobortis porta. Nunc auctor tincidunt aliquam. In hac habitasse
            platea dictumst. Cras ut dolor et arcu lobortis matti ante.
          </section>
          <section className="">
            <section className="button is-primary is-rounded is-outlined">
              #MitchBackwards
            </section>
            <section className="button is-primary is-rounded is-outlined">
              #MitchBackwards
            </section>
            <section className="button is-primary is-rounded is-outlined">
              #MitchBackwards
            </section>
            <section className="button is-primary is-rounded is-outlined">
              #MitchBackwards
            </section>
          </section>
        </section>
      </section>
    );
  }
}

NewsStoryOverlay.propTypes = {
  title: PT.string.isRequired,
  imageUrl: PT.string,
  author: PT.string
};

export default NewsStoryOverlay;
