import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.istockphoto.com/videos/fireplace-at-night-video-id1342358866"
      />
    </div>
  );
};

export default Watch;
