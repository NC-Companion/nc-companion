import React from "react";
import PT from "prop-types";

import './NewsStoryOverlay.css'

class NewsStoryOverlay extends React.Component {
  render() {
    const {title, img_url, author, tags, body} = this.props;
    return (
      <section className="overlayBody">
        <section class="hero overlay-hero is-medium">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container has-text-centered"></div>
            </nav>
          </div>

          <div class="hero-body">
            <div class="container has-text-left">
              <section className='box hero overlay-body isDark'>

                <section className='hero-head title has-text-white'>
                  {this.props.story.title}
                  <span className='is-pulled-right is-size-1'><button class="delete" aria-label="delete" onClick={() => this.props.close()}></button></span>
                </section>
                <section className='hero-body'></section>
                <div class="hero-foot">
                  <nav class="tabs">
                    <div class="container">
                      <ul>
                        <li class="is-active">
                          <a>Overview</a>
                        </li>
                        <li>
                          <a>Modifiers</a>
                        </li>
                        <li>
                          <a>Grid</a>
                        </li>
                        <li>
                          <a>Elements</a>
                        </li>
                        <li>
                          <a>Components</a>
                        </li>
                        <li>
                          <a>Layout</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </section>
            </div>
          </div>
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
