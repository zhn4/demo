import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Add from './Add.js'

import './music.css'

class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: null
    }
  }
  componentWillMount() {
    fetch('http://localhost:3000/api/music', {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      }
    }).then(res => {
        if(res.ok) {
          console.log(res)
          res.json().then(json => {
            console.log(json)
            this.setState({
              songs: json
            })
          })
        }
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="music">
        <MusicItem songs={this.state.songs}/>
        <Add />
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
                <div key={i}>
                  {song.title} -> {song.singer}
                  <a className="delete">删除</a>
                </div>
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
