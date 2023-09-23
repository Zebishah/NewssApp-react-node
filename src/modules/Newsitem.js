import React from 'react'

const NewsItem =(props)=> {

    let {title,desc,imgUrl,newsUrl,publishedAt}=props;
    return (
      <div className="container my-4">
        <div className="card " style={{width: "18rem",height: "23rem"} }>
          <img src={imgUrl?imgUrl:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} className="card-img-top" alt="..." style={{height: "10rem"}}/>
            <div className="card-body">
              <h5 className="card-title "style={{fontSize: "15px"}}>{title}...</h5>
              <p className="card-text" style={{fontSize: "12px"}}>{desc}...</p>
              <p className="card-text"style={{marginTop: "-1rem"}}><small className="text-body-secondary">{new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-primary">More News</a>
            </div>
        </div>
        
      </div>
      
    )
  
}
export default NewsItem;
