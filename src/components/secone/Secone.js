import { Grid, Typography } from "@material-ui/core";
import React from "react";
// import Video from 'react-responsive-video'
import VideoPlayer from "react-background-video-player";
import Video from "../secone/videos/Book_of_Gates.mp4";
import "./secone.css";
import { makeStyles } from "@material-ui/core";
const styles = makeStyles(() => ({
  grid: {
    display: "flex",
    height: "100vh",

    // width: "100% auto",
  },
  video: {
    width: "500px auto",
    height: "500px auto",
  },
}));
function Secone() {
  const classes = styles();
  return (
    <Grid
      item
      className={classes.grid}
      xs={12}
      sm={12}
      lg={12}
      md={12}
      id="home"
    >
      {/* <video
        autoPlay
        loop
        muted
        className="vedio"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "110%",
          // objectFit: "fill",
          objectFit: "cover",
          transform: "translate(-50%, -50% )",
          zIndex: "-1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video> */}
      <VideoPlayer className="video" src={Video} width={500} />
      {/* <Video src={video}/> */}
    </Grid>
  );
}

export default Secone;
