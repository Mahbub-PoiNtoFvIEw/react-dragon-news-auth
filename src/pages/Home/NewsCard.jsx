import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const {title, thumbnail_url, details, _id} = aNews;
  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      <figure className="px-10 pt-10">
        <img
          src={thumbnail_url}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200
            ? <p>{details.slice(0,200)} <Link className="text-blue-500 font-bold" to={`/news/${_id}`}>Read More...</Link></p>
            :
            <p>{details}</p>
        }
      </div>
    </div>
  );
};

export default NewsCard;
