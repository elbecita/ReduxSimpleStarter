'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAjbXyDRRohY5mkmXzhtCwY7W77CWSb3ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Iron Maiden');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    // Debouncing search to not call the fn again until a certain amount of time
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
