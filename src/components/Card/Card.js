import React from "react";
import "./Card.css";

function Card(props) {
  const { heading, name, listeners, image, playcount, topAlbums } = props;

  return (
    <div className="card bg-secondary mb-3">
      <div className="row g-0">
        <div className="col-3 d-flex justify-content-center align-items-center p-1">
          <img src={image} className="img-fluid rounded" alt="Artist" />
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center">
          <div className="card-body">
            <p
              className={
                topAlbums
                  ? "card-title"
                  : "card-title border-bottom border-dark border-3 pb-1"
              }
            >
              {heading}
            </p>

            <h5 className="card-text fw-bold">{name}</h5>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p className="card-text">
            {listeners && (
              <>
                <small>{listeners}</small> <br />
              </>
            )}

            <small>{playcount}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
