import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';

export default class PlayButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      musicIsPlaying: this.props.isPlaying
    }

  }


  render() {
    return (<div>
      {
        this.props.isPlaying === true
          ? <IconButton onClick={this.props.toggleButton}><PlayCircleFilled fontSize='large'/></IconButton>
          : <IconButton onClick={this.props.toggleButton}><PauseCircleFilled fontSize='large'/></IconButton>
      }
    </div>)
  }
}
