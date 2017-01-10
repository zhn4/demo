import React, { Component } from 'react';
import reqwest from 'reqwest';
// import axios from 'axios';
// import 'whatwg-fetch';

var data = [
  {
    title: '上海正午'
  },
  {
    title: '火拼时速'
  }
]

class Douban extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: data,
      loading: true
    }
  }
  changeMovieDate(getData) {
    this.setState({
      movieData: getData
    })
  }
  componentWillMount() {
    console.log('WillMount')
    const self = this
    reqwest({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      type: 'jsonp',
      success: (res) => {
        console.log(res)
        self.changeMovieDate(res.subjects)
        self.setState({
          loading: false
        })
      }
    })
  }
  componentDidMount() {
    console.log('DidMount')
  }
  render() {
    return (
      <div>
        <p>调用豆瓣api</p>
        {this.state.loading === true ? 'loading...' : 'ok'}
        <ul>
          {this.state.movieData.map((movie, i)=>(
            <li key={i}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Douban;
