import { Button, Grid, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import { makeStyles } from "@material-ui/core";
import YouTube from "@material-ui/icons/YouTube";
import { FaDiscord } from "react-icons/fa";

import Modal from "../term_model/Modal";
const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "4rem",
    backgroundColor: "#88301E",
    width: "100%",
    paddingBottom: "20px",
  },
  img_div: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "250px",
    height: "300px",
    borderRadius: "15px",
    border: "2px solid gray",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",
    margin: "10px",
    // fontFamily: "Yatra One",
    fontFamily: "Ink Free",
    paddingTop: "20px",
    color: "#fff",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30px",
  },
  ico: {
    padding: "10px",
    fontSize: "3rem",
    border: "2px solid gray",
    borderRadius: "50%",
    margin: "0px 10px",
    color: "#fff",
  },
  txt: {
    fontFamily: "Ink Free",

    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },
  txtTerm: {
    fontFamily: "Ink Free",
    fontSize: "1.2rem",
    textDecoration: "underline",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },
  hr: {
    backgroundColor: "gray",
    height: "2px",
  },
  discordIcon: {},
}));
function Footer() {
  const classes = useStyle();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.root} id="Contact">
      <Fade bottom>
        <Grid>
          <div className={classes.img_div}>
            <img
              src="../assets/Cover-Book-of-Gates-v6-blackSmall.png"
              alt=""
              className={classes.img}
            />
          </div>
          <h4 className={classes.text}>The Book Of Gates</h4>
          <div className={classes.icons}>
            <a
              href="https://www.instagram.com/bookofgatesofficial/"
              target="_blank"
            >
              <InstagramIcon className={classes.ico} />
            </a>
            <a href="https://twitter.com/bookofgates1" target="blank">
              {/* <FacebookIcon className={classes.ico}/>
                </IconButton>
                <IconButton 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("http://www.youtube.com/channel/UCFIisLiF7SE4r-fZipgN_wg")
                }}
                > */}
              <TwitterIcon className={classes.ico} />
            </a>
            <a href="https://youtu.be/zm-c2kwofTw" target="_blank">
              <YouTube className={classes.ico} />
            </a>
            <a href="https://discord.gg/aUKY8zVQVg" target="_blank">
              <FaDiscord className={classes.ico} />
            </a>
          </div>
          <hr className={classes.hr} />
          <h2 className={classes.txt}>
            {" "}
            Copyright and Trademark 2023 Book of Gates, LLC, All Rights Reserved
            Throughout the World.{" "}
          </h2>
          <a
            onClick={() => {
              setModalOpen(true);
            }}
            className={classes.txtTerm}
          >
            {" "}
            Terms and Condition{" "}
          </a>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </Grid>
      </Fade>
    </div>
  );
}

export default Footer;
