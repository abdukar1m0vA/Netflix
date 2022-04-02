import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images2.alphacoders.com/120/1207327.jpg" alt="" />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkwT-ZU-B9J3dd0NMS-KhrXWJuKwfki28X0ImIWv7PWw98nW5EJU3q43nQZcGD_Soh4k&usqp=CAU"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos at iure
          dolores libero nam delectus quae asperiores voluptatibus, deleniti id
          quisquam architecto et. Sequi temporibus aut eum perspiciatis fuga
          reiciendis!
        </span>
        <div className="buttons">
          <Link to="/watch">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
