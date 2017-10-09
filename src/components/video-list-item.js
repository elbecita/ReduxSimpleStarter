'use strict';

import React from 'react';

// {video} is same as doing const video = props.video; (ES6)
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className='list-group-item'>
      <div className='video-list media'>
        <div clasName='media-left'>
          <img clasName='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{title}</div>
        </div>
      </div>
      
    </li>
  );
};

export default VideoListItem;
