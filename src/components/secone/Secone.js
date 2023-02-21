import { Grid, Typography } from "@material-ui/core";
import React from "react";
// import Video from 'react-responsive-video'
import VideoPlayer from "react-background-video-player";
import Video from "../secone/videos/Book_of_Gates.mp4";
import "./secone.css";
import { makeStyles } from "@material-ui/core";
import { height } from "@mui/system";

const styles = makeStyles(() => ({
  grid: {
    display: "flex",  
    height: "100vh",

    // width: "100% auto",
  },
  video: {
    maxWidth: "100%",
    height: " auto",
  },
}));
function Secone() {
  const classes = styles();
  return (
    <Grid
      item
      className=""
      xs={12}
      sm={12}
      lg={12}
      md={12}
      style={{marginTop: "77px",marginBottom: "-40px"}}
      id="home"
    >
    
     <video autoPlay loop muted className="w-100 h-100" style={{width: "100%", height: "100%"}} sm={{height: "55vh"}}>
      <source src="https://skywalker.infura-ipfs.io/ipfs/QmRxMJugqqa8tLhocesT8aJGqHgpBDuDirwNi6iCiyvv11" type="video/mp4" />
     </video>
      {/* <VideoPlayer className="video" src={Video} disableBackgroundCover={false} playsInline={false}  styles={{width: "50%", height: "auto", left: "0px"}}/> */}
      {/* <Video src={video}/> */}
    </Grid>
  );
}

export default Secone;
