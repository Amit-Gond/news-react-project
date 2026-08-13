import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", display: "flex" }}>
          <img
            src={
              imgurl
                ? imgurl
                : "https://www.aljazeera.com/wp-content/uploads/2026/08/afp_6a73478b20c8-1785939851.jpg?resize=1920%2C1440"
            }
          />
          <div className="card-body">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{zIndex: "1"}}>
               {source}
              </span>
            <h5 className="card-title">
              {title}...{" "}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
