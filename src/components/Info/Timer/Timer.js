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
  const style = {
    /* items  */
    MuiTimelineItemroot: {
      display: "flex",
      position: "relative",
      listStyle: "none",
      minHeight: "50px",
    },
    /* dot  in items */
    MuiTimelineDotroo: {
      backgroundColor: "var(--main-colo)",
      boxShadow: " inset 1px 1px 1px white",
    },
    /* content  in items*/
    MuiTimelineContentrooth5: {
      color: "gray",
      fontSize: " 14px",
      textTransform: "capitalize",
    },
    /* span in typography  in items */
    MuiTimelineContentroothspan: { color: "rgb(61, 60, 60)" },
  };

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

        <TimelineItem style={style.MuiTimelineItemroot}>
          <TimelineSeparator>
            <TimelineDot style={style.MuiTimelineDotroo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" style={style.MuiTimelineContentrooth5}>
              <span style={style.MuiTimelineContentroothspan}> Name: </span>
              Abrar Muthanna Rakea
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem style={style.MuiTimelineItemroot}>
          <TimelineSeparator>
            <TimelineDot style={style.MuiTimelineDotroo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" style={style.MuiTimelineContentrooth5}>
              <span style={style.MuiTimelineContentroothspan}>
                
                Birthday :
              </span>
              31 october 1997
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem style={style.MuiTimelineItemroot}>
          <TimelineSeparator>
            <TimelineDot style={style.MuiTimelineDotroo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" style={style.MuiTimelineContentrooth5}>
              <span style={style.MuiTimelineContentroothspan}> job : </span>
              freelancer
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem style={style.MuiTimelineItemroot}>
          <TimelineSeparator>
            <TimelineDot style={style.MuiTimelineDotroo} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" style={style.MuiTimelineContentrooth5}>
              <span style={style.MuiTimelineContentroothspan}> Email </span>
              :abraralrawi97@gmail
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Timer;
