import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicItem extends Component {
  handleDelete(e) {
    console.log('delete this song')
    console.log(e.target.getAttribute('data-id'))
    fetch('http://localhost:3000/api/deleteMusic/' + e.target.getAttribute('data-id') , {
      method: 'delete'
    })
    .then(res => {
      console.log(res)
      res.json().then(json => {
        console.log(json)
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        {
          this.props.songs
            ?
              this.props.songs.map((song, i) => (
                <div key={i}>
                  {song.title} -> {song.singer}
                  <a className="delete" data-id={song._id} onClick={this.handleDelete.bind(this)}>删除</a>
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

export default MusicItem
