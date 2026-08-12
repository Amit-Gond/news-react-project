import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {title, description,imgurl,url} = this.props
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
      <img src={imgurl?imgurl:"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0122%2Fr47215_1296x729_16%2D9.jpg"}/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={url} target="_blank"  className="btn btn-dark">Read more</a>
      </div>
      </div>
      </div>
    )
  }
}
