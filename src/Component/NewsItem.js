import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: '0',
            justifyContent: 'flex-end',
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: '90%', zIndex: '1' }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? 'https://ichef.bbci.co.uk/news/1024/branded_news/814A/production/_121889033_gettyimages-1307114658.jpg'
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : 'UnKnown'} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
