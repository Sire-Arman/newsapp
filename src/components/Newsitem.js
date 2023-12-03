import React from "react";

const Newsitem = (props) => {
  
    let { title, description, imageUrl, newsurl, author, date, source } =
      props;
    return (
      <div className="container">
        <div className="card d-flex align-items-center justify-content-center" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: 0,
              top:0,
              position: "absolute",
            }}
          >
            <span className=" badge rounded-pill bg-danger"> {source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.livemint.com/lm-img/img/2023/05/05/600x338/Aayush_Ghosh_Choudhary_1683248229829_1683248238512.jpg"
            }
            className="card-img-top"
            alt=" "
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
