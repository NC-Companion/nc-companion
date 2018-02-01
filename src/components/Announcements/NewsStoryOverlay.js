import React from "react";
import PT from "prop-types";

import './NewsStoryOverlay.css'

class NewsStoryOverlay extends React.Component {
  render() {
    return (
      <section className="overlayBody">
        <section class="hero overlay-hero is-medium">
          <section class="hero-head">
            <nav class="navbar">
              <section class="container has-text-centered"></section>
            </nav>
          </section>

          <section class="hero-body">
            <section class="container has-text-left">
              <section className='box hero overlay-body isDark'>

                <section className='hero-head title has-text-white'>
                  <section className='columns'>
                    <section className='column is-four-fifths is-size-4'>
                      <section>{this.props.event.title}</section>
                    </section>
                    <section className='column is-one-fifths'>
                      <span
                        className='is-pulled-right button is-size-6 is-rounded is-danger'
                        onClick={() => this.props.close()}>
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </span>
                    </section>
                  </section>
                </section>
                <section className='hero-body box columns'>
                  <section className='column'>
                    <img src={this.props.event.imageUrl[0]} alt="storyImage"/>
                  </section>
                  <section className='column'>
                    <span className='section is-size-6'>{this.props.event.body}</span>
                  </section>
                </section>
                <section class="hero-foot">
                  <nav class="tabs">
                    <section class="container">
                      <ul>
                        {this.props.event.tag.length && this
                          .props
                          .event
                          .tag
                          .map(tag => <li>
                            <a className="has-text-danger">#{tag}</a>
                          </li>)}
                      </ul>
                    </section>
                  </nav>
                </section>
              </section>
            </section>
          </section>
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
