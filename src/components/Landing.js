import React, { Component } from 'react';
import Player from './Player';

const sampleData = [
  {
    name: 'sample1',
    img: '/sample.png',
    url: 'url'
  },
  {
    name: 'sample2',
    img: '/sample.png',
    url: 'url'
  }
];
export default class Landing extends Component {
  render() {
    const video_url = require('../files/sample_video.MP4');
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: video_url,
          type: 'video/mp4'
        }
      ]
    };

    return (
      <div>
        Sample Video :
        <Player {...videoJsOptions} endScreenData={sampleData} />
      </div>
    );
  }
}
