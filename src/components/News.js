import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0 )
// document.title = `${capitalizeFirstLetter(props.category)} - Newsified`;
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fetchMoreData = async () => {
 
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
 setLoading(false)
 setTotalResults(parsedData.totalResults)
    
  };
  const scrollToTop = ()=> {
    window.scrollTo(0, 0);
  }
  const updatenews = async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
     
    let data = await fetch(url);
    props.setProgress(40);

    let parsedData = await data.json();
    props.setProgress(70);
 setArticles(parsedData.articles);
 setLoading(false)
 setTotalResults(parsedData.totalResults)
    
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Newsified`;
    updatenews();
    //eslint-disable-next-line
  },[]);
  

    // window.scrollTo(0, 0);
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2b16409341a4e089d42b12da9ade66e&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
    // window.scrollTo(0, 0);
  
  
//  const handlePrev = async () => {
    // window.scrollTo(0, 0);
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2b16409341a4e089d42b12da9ade66e&page=${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ loading: false });
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    // setPage( page-1)
    // updatenews();
//   };
//  const  handleNext = async () => {
    // window.scrollTo(0, 0);
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2b16409341a4e089d42b12da9ade66e&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({ loading: false });
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
  //   setPage(page+1)
  //  updatenews();
  // };
 
    return (
      <>
        <h1
          className="text-center mx-10"
          style={{ margin: "35px 0px" , marginTop:"85px"}}
        >{`Newsified-Top Headlines from ${capitalizeFirstLetter(
          props.category
        )}`}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {articles?.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Newsitem
                      title={
                        element.title
                          ? element.title.slice(0, 53) + "....."
                          : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 80) + " . . . ."
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div> */}
        <button
          className="btn pmd-btn-fab pmd-ripple-effect btn-success pmd-btn-raised"
          type="button"
          style={{ position: "fixed",bottom: "30px" , right: "30px" }}
          onClick={scrollToTop}
        >
          Top &uarr;
        </button>
      </>
    );
  
        }
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;

