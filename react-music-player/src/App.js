import React, {Component} from 'react';
import './App.css';
import {getAnimation, handleFileSelect} from './components/animation';
import PlayButton from './components/playButton';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMusicPlaying: false
    };
    this.clickHandle = this.clickHandle.bind(this)
    getAnimation()
  }

  componentDidMount() {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
  }

  clickHandle(event) {
    if (this.state.isMusicPlaying === false) {
      this.audio.play();
      this.setState({isMusicPlaying: true})
    } else {
      this.audio.pause();
      this.setState({isMusicPlaying: false})
    }

  }


  render() {
    return (<div id="container">
      <div id="hook"></div>
      <h1>Play Music</h1>
      <PlayButton toggleButton={this.clickHandle} isPlaying={this.state.isMusicPlaying}/>
      <audio id="audio" ref={(audioTag) => {
          this.audio = audioTag
        }}/>
      <input type="file" id="files" name="files[]" multiple="multiple"/>
    </div>)
  }
}

export default App;
