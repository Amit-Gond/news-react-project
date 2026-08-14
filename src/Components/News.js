import React, { Component } from "react";
import PropTypes, { string } from "prop-types";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 36,
      articles: [
        {
          source: {
            id: "the-hill",
            name: "The Hill",
          },
          author: "Amie Parnes, Caroline Vakil",
          title:
            "El-Sayed faces ‘risky bet’ with Michigan’s Black voters - The Hill",
          description:
            "Abdul El-Sayed emerged from Michigan’s Democratic primary facing questions not just about how he can solidify support outside the party’s base but how he will energize Black voters, one of its most critical voting blocs.  During the primary, Black voters larg…",
          url: "https://thehill.com/homenews/campaign/6017875-el-sayed-michigan-senate-black-voters/",
          urlToImage:
            "https://thehill.com/wp-content/uploads/sites/2/2026/08/El-Sayed_Parnes_AP_JuliaDemareeNikhinson.jpg?w=1280",
          publishedAt: "2026-08-08T21:00:00Z",
          content:
            "Skip to content Abdul El-Sayed emerged from Michigan’s Democratic primary facing questions not just about how he can solidify support outside the party’s base but how he will energize Black voters, … [+4558 chars]",
        },
        {
          source: {
            id: "the-hill",
            name: "The Hill",
          },
          author: "Sarah Davis",
          title:
            "Dems blast Blanche as enabler of ‘Trump’s corruption’ after AG confirmation - The Hill",
          description:
            "All Democrats in the U.S. Senate voted against the nomination of Attorney General Todd Blanche, but their opposition was overridden by a majority of GOP lawmakers in the upper chamber in the early hours of Saturday morning. Many of these Democrats cited Blanc…",
          url: "https://thehill.com/homenews/senate/6018748-democrats-oppose-blanche-confirmation/",
          urlToImage:
            "https://thehill.com/wp-content/uploads/sites/2/2026/07/Leading-Blanche_071626_AP_Mariam-Zuhaib.jpg?w=1280",
          publishedAt: "2026-08-08T19:45:00Z",
          content:
            "Skip to content All Democrats in the U.S. Senate voted against the nomination of Attorney General Todd Blanche, but their opposition was overridden by a majority of GOP lawmakers in the upper chambe… [+4733 chars]",
        },
      ],
    },
  ];

  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e92d54a98324fd592561f708246dd55&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("prev");

    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    console.log("next");

    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container" my-3="true">
        <h4 className="text-center" style={{ margin: "20px" }}>
          News Top-headlines
        </h4>
        {this.state.loading && <Spinner />}
        {!this.state.loading &&
          this.state.articles.map((element) => {
            return (
              <div className="col-4 my-3 d-inline-flex" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgurl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source ? element.source.name : ""}
                />
              </div>
            );
          })}
        <div className="container d-flex justify-content-center ">
          <button
            disabled={this.state.page <= 1}
            type="button mx-3"
            className="btn btn-dark "
            onClick={this.handlePrevClick}
          >
            prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark mx-3"
            id="Nextbtn"
            onClick={this.handleNextClick}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
