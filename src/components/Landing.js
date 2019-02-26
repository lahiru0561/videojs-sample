import React, { Component } from 'react';
import Player from './Player';

const recommendations = [
  {
    name: 'Recom1',
    img: '/sample.png',
    url: 'url'
  },
  {
    name: 'Recom2',
    img: '/sample.png',
    url: 'url'
  }
];
export default class Landing extends Component {
  render() {
    const filmVideoOptions = {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: 'URL',
          type: 'video/mp4'
        }
      ],
      plugins: {}
    };

    return (
      <div>
        Video :
        <Player {...filmVideoOptions} recomendationData={recommendations} />
      </div>
    );
  }
}
