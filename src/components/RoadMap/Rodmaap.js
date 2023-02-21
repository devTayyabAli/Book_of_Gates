import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../RoadMap/roadmap.css";

import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  header: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "3.5rem",
    paddingTop: "2rem",
    color: "#88301E",
    fontFamily: "Ink Free",
    fontWeight: "bold",
  },
  roadmap_para: {
    textAlign: "center",
    fontFamily: "Ink Free",
    fontSize: "35px",
    fontWeight: "bold",
    color: "#88301E",
    padding: "0px 30px",
  },
}));

function Rodmaap() {
  const classes = useStyle();
  return (
    <>
      <div className="roadmap-root" id="Roadmap">
        <Typography className={classes.header}>
          Limited Edition Roadmap
        </Typography>
        <h3 className={classes.roadmap_para}>
          The release of the full-color limited edition Graphic Novel NFT
          printing will come with the following benefits.
        </h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>50% - </span>Release New Collectible Covers{" "}
            </h1>
            <h3>
              Ten new collectible covers for the Graphic Novel will be
              airdropped to lucky holders.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>80% - </span> One Hundred Key Passes
            </h1>
            <h3>
              We will airdrop 100 Free Key Passes to Book of Gates Vol. II when
              it is completed.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>100% - </span> IRL Graphic Novel
            </h1>
            <h3>
              An IRL First Edition Graphic Novel printing is planned, and all
              holders are eligible for a copy (Additional fee and shipping and
              handling applies).
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="roadmap-root mt-4" id="Roadmap">
        <Typography className={classes.header}>
          The Character NFT Roadmap
        </Typography>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>50% - </span>The Ogdoad Characters{" "}
            </h1>
            {/* <h3>
              Ten new collectible covers for the Graphic Novel will be
              airdropped to lucky holders.
            </h3> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>80% - </span> Treasure Hunt
            </h1>
            {/* <h3>
              We will airdrop 100 Free Key Passes to Book of Gates Vol. II when
              it is completed.
            </h3> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>100% - </span> Phase 2
            </h1>
            <h3>
              After 100% activation of the Character NFT roadmap, Book of Gates
              will move to phase 2, including the Free NFT Breeding Program and
              the NFT Trading Game, allowing holders to trade, collect and
              battle with each other.
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Rodmaap;
