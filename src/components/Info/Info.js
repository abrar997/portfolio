import { Typography } from "@material-ui/core";
import React from "react";
import ButtonAddCV from "./ButtonAddCV/ButtonAddCV";
import "./Info.css";
import Timer from "./Timer/Timer";
const Info = () => {
  return (
    <div className="info">
      <Typography variant="h3">Abrar Muthanna </Typography>
      <Typography variant="h5">front end react developer </Typography>
      <figure className="image-info">
        <img src={require("./images/1.png").default} />
      </figure>
      <div className="timer-info">
        <Timer />
      </div>
      <ButtonAddCV />
    </div>
  );
};

export default Info;
