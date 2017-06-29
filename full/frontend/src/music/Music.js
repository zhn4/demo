import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: null
    }
  }
  componentWillMount() {
    fetch('http://192.168.1.82:3000/api/music', {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
    .then(musics => {
      console.log('success')
      console.log(musics.json())
    })
    .catch(err => {
      console.log(err)
    })
    // this.setState({
    //   songs: [
    //     {
    //       title: '第七感',
    //       singer: '张靓颖'
    //     }
    //   ]
    // })
  }
  render() {
    return (
      <div className="music">
        <MusicItem songs={this.state.songs}/>
      </div>
    )
  }
}

class MusicItem extends Component {
  render() {
    return (
      <div>
        {
          this.props.songs
            ?
              this.props.songs.map((song, i) => (
                <span key={i}>{song.title} -> {song.singer}</span>
              ))
            :
            <p>false</p>
        }

      </div>
    )
  }
}

MusicItem.propTypes = {
  songs: PropTypes.array
}

export default Music
