import React,{useState,useEffect} from 'react'
import NewsItem from './Newsitem';

import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticle] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults, set_TotalResults] = useState(0)
 

 
  const update_content = async () => {

    let apiKey = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&pageSize=5`;
    setLoading(true )
    let data = await fetch(apiKey);
    let parsedData = await data.json();

  setArticle(parsedData.articles);
   set_TotalResults(parsedData.totalResults);
    setLoading(false );
  }
  useEffect(() => {
    update_content();
  },[])
  const fetchMoreData = async () => {
   setPage(page + 1 )
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true )
    let data = await fetch(apiKey);
    let parsedData = await data.json();
   setArticle(articles.concat(parsedData.articles) );
   set_TotalResults(parsedData.totalResults);
    setLoading(false );

  }
  // showPrevNews=async()=>{
  //   let apiKey=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page-1}&pageSize=${props.pageSize}`;
  //   setState({true})
  //   let data=await fetch(apiKey);
  //   let parsedData=await data.json();

  //   setState({
  //     page:page-1,
  //   articles:parsedData.articles,
  //   false

  //    })
  // }
  // showNextNews=async()=>{

  // if(Math.ceil(page+1>totalResults/20))
  // {

  // }
  // else
  // {
  //   let apiKey=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page+1}&pageSize=${props.pageSize}`;
  //   setState({true})
  //   let data=await fetch(apiKey);
  //   let parsedData=await data.json();

  //   setState({

  //     page:page+1,
  //   articles:parsedData.articles,
  //     false

  //    })
  //   }
  // }


    return (

      <div className="container my-3">
        <h1 style={{ marginLeft: "15rem" }}>These are our news headlines Everyone</h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="row ">
            {articles &&articles.length > 0 ? (
             articles.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    desc={element.description ? element.description.slice(0, 88) : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                  />
                </div>
              ))
            ) : (
              <p>Noarticles available</p>
            )}
          </div>
        </InfiniteScroll>
        {/* {Loading && <Spinner/>} */}

        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" >Previous</button>
          <button disabled={page + 1 >= totalResults / 20} type="button" className="btn btn-dark" >Next</button>
        </div>
      </div>
    )
  
}
export default News