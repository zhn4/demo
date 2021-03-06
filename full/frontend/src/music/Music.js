import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Add from './Add.js'
import Search from './Search.js'
import MusicItem from './Item.js'

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
        <Search />
      </div>
    )
  }
}

// class MusicItem extends Component {
//   handleDelete(e) {
//     console.log('delete this song')
//     console.log(e.target.getAttribute('data-id'))
//     fetch('http://localhost:3000/api/deleteMusic/' + e.target.getAttribute('data-id') , {
//       method: 'delete'
//     })
//     .then(res => {
//       console.log(res)
//       res.json().then(json => {
//         console.log(json)
//       })
//     }).catch(err => {
//       console.log(err)
//     })
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.props.songs
//             ?
//               this.props.songs.map((song, i) => (
//                 <div key={i}>
//                   {song.title} -> {song.singer}
//                   <a className="delete" data-id={song._id} onClick={this.handleDelete.bind(this)}>删除</a>
//                 </div>
//               ))
//             :
//             <p>false</p>
//         }
//
//       </div>
//     )
//   }
// }
//
// MusicItem.propTypes = {
//   songs: PropTypes.array
// }

export default Music
