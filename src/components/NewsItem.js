import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageURL, newsURL, author, date , source} = props;
    return (
      <>
        <div className="card my-3">
          <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                      }
                      }> 
            <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={!imageURL?"https://img.huffingtonpost.com/asset/645e05e02300005900586b9a.jpeg":imageURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,45)}...</h5>
                <p className="card-text">{description.slice(0,88)}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"UNKNOWN":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsURL} className="btn btn-sm btn-primary">More</a>
            </div>
        </div>
      </>
    )
}

export default NewsItem