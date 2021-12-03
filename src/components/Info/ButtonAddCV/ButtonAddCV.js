import React from 'react'
import "./ButtonAddCV.css";
import {Button,Icon} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
const ButtonAddCV = () => {
    return (
      <div className="button-info-cv">
        <Button variant="contained" endIcon={<GetAppIcon />}>
          download cv
        </Button>
      </div>
    );
}

export default ButtonAddCV
