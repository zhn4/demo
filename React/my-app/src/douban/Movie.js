import React, { Component } from 'react';

import reqwest from 'reqwest';

import Search from './Search';
import Loading from './Loading';


const data = [
  {
    title: '上海正午'
  },
  {
    title: '火拼时速'
  }
]

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: data,
      searchData: '还没传过来',
      loading: true
    }
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
  changeMovieDate(getData) {
    this.setState({
      movieData: getData
    })
  }
  movieSearch(getData) {
    console.log('123')
    this.setState({
      searchData: getData,
      loading: true
    })
    const self = this
    console.log('this is getData:' + getData)
    console.log('this is searchData:' + self.state.searchData)
    reqwest({
      url: 'https://api.douban.com/v2/movie/search',
      method: 'get',
      data: {
        q: getData
      },
      type: 'jsonp',
      success: (res) => {
        console.log(res)
        self.changeMovieDate(res.subjects)
        console.log(self.state.searchData)
        self.setState({
          loading: false
        })
      },
      error: (err)=> {
        console.log(err)
      }
    })
  }
  render() {
    return (
      <div>
        <h3>this is Movie page</h3>
        <Search movieSearch={this.movieSearch.bind(this)}/>
        <p>{this.state.searchData}</p>
        {this.state.loading ? <Loading/> : ''}
        <ul>
          {this.state.movieData.map((movie, i)=>(
            <li key={i}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Movie;
