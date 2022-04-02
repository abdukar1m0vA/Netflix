import React, { useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import "./listItem.scss";
import { Link } from "react-router-dom";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://c.tenor.com/QFnWBn0lhDAAAAAC/cobrakai.gif";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://static.alpha-ag.ru/uploads/posts/2021-05/1620238531_Cobra-Kai-Card-Fighter.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <img className="img" src={trailer} autoPlay={true} alt="" />
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch">
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2021</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo mollitia a nihil reiciendis neque morible.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
