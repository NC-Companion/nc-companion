import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '258',
      width: '525',
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <section className="ncVid">
        <YouTube
        videoId='61mTfqHuxVk'
        opts={opts}
        onReady={this._onReady}
        />
      </section>
    )
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default YoutubeVideo;