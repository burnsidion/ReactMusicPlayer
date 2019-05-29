import React, {Component} from 'react';
import './App.css';
import {getAnimation,handleFileSelect} from './components/animation';
import PlayButton from './components/playButton';


class App extends Component{
  constructor(props){
    super(props)
    this.state = { isMusicPlaying: false };
    this.clickHandle = this.clickHandle.bind(this)
  }

  componentDidMount(){
    document
      .getElementById('files')
      .addEventListener('change', handleFileSelect, false);
      getAnimation()
  }

  clickHandle(event){
    if(this.state.isMusicPlaying === false){
      this.setState({isMusicPlaying : true})
    } else {
      this.setState({isMusicPlaying : false})
    }
  }

  render(){
    return (<div id="container">
      <div id="hook"></div>
      <h1>Play Music</h1>
    <PlayButton toggleButton={this.clickHandle} isPlaying={this.state.isMusicPlaying}/>
      <input type="file" id="files" name="files[]" multiple />
  </div>)
  }
}


export default App;
