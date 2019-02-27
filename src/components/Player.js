import React, { Component } from 'react';
import videojs from 'video.js';
import '../../node_modules/video.js/dist/video-js.css';

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      isEnd: false
    };
  }

  componentDidMount() {
    window.videojs = videojs;
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    this.player.on('on', () => {
      this.setState({ isEnd: false });
    });

    this.player.on('ended', () => {
      this.setState({ isEnd: true });
      this.player.exitFullscreen();
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div className="video-content">
        <video
          ref={node => (this.videoNode = node)}
          className="video-js"
          crossOrigin="anonymous"
        />
        {this.state.isEnd ? (
          <div className="end-screen-container">
            <div>
              <h5 class="end-screen-title">Sample End screen...</h5>
              <div class="end-screen-items">
                {this.props.endScreenData.map(item => {
                  return (
                    <div className="end-screen-item">
                      <img
                        src={require('../files/sample.jpg')}
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
