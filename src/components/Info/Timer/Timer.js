import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FilterVintageOutlinedIcon from "@material-ui/icons/FilterVintageOutlined";
import "./Timer.css";
import { Typography } from "@material-ui/core";
const Timer = () => {
  return (
    <div>
      <Timeline align="left" xs={12}>
        <TimelineItem>
          <TimelineSeparator style={{ height: "90px" }}>
            <TimelineDot
              style={{
                background: "rgb(211, 0, 109) ",
                color: "white",
                padding: "10px",
                boxShadow: "1px 1px 10px grey",
              }}
            >
              <FilterVintageOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              <span> Name: </span>Abrar Muthanna Rakea
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              <span> Birthday : </span> 31 october 1997
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5">
              <span> job : </span> freelancer
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" style={{ textTransform: "none" }}>
              <span> Email </span>:abraralrawi97@gmail
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Timer;
