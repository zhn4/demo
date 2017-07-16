import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Search extends Component {
  // constructor() {
  //
  // }
  handleSearch(e) {
    if(e.key === 'Enter' && this.refs.keyword.value !== '') {
      console.log(this.refs.keyword.value)
      fetch('http://localhost:3000/api/search', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({
          title: this.refs.keyword.value
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
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
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="搜索"
          ref="keyword"
          onKeyPress={this.handleSearch.bind(this)}/>
      </div>
    )
  }
}

export default Search
