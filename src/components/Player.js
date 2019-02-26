import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class Player extends Component {
  componentDidMount() {
    window.videojs = videojs;
    this.player = videojs(
      this.videoNode,
      this.props,
      function onPlayerReady() {}
    );

    this.player.on('on', () => {
      // if (this.state.isFilmEnd) {
      //   this.setState({ isFilmEnd: false });
      // }
    });

    this.player.on('ended', () => {
      // this.setState({ isFilmEnd: true });
      // this.player.exitFullscreen();
    });
  }

  render() {
    return (
      <div>
        <video
          ref={node => (this.videoNode = node)}
          className={'video-js-sample'}
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}
