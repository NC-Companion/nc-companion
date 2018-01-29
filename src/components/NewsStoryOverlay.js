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
                  <section className='columns'>
                    <section className='column is-four-fifths is-size-4'>
                      <section>{this.props.story.title}</section>
                      <section>{this.props.story.author.length && <span className='has-text-danger is-size-6'>
                          By {this
                            .props
                            .story
                            .author
                            .split(',')[1]}
                          {' '}{this
                            .props
                            .story
                            .author
                            .split(',')[0]}
                        </span>}</section>
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
                    <img src={this.props.story.img_url}/>
                  </section>
                  <section className='column'>
                    <span className='section is-size-6'>{this.props.story.body}</span>
                  </section>
                </section>
                <div class="hero-foot">
                  <nav class="tabs">
                    <div class="container">
                      <ul>
                        {this.props.story.tags.length && this
                          .props
                          .story
                          .tags
                          .map(tag => <li>
                            <a className="has-text-danger">#{tag}</a>
                          </li>)}
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
