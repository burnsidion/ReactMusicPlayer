import React, {Component} from 'react';
import './App.css';
import {getAnimation,handleFileSelect} from './components/animation'


class App extends Component{
  constructor(props){
    super(props)
    this.state = { isMusicPlaying: false };
  }

  componentDidMount(){
    document
      .getElementById('files')
      .addEventListener('change', handleFileSelect, false);
      getAnimation()
  }

  render(){
    return (<div id="container">
      <div id="hook"></div>
      <h1>Play Music</h1>
      <input type="file" id="files" name="files[]" multiple />
  </div>)
  }
}


export default App;
