import { Grid, Button } from "@material-ui/core";

import React from "react";
import { Fade } from "react-reveal";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import MintBtn from "../secone/MintBtn";
import "./secthree.css";

// this section eight

function Secthree() {
  return (
    <div>
      <div className="secThree">
        <Grid container justifyContent="center">
          {/* <Grid item xs={12} lg={12} className="mint"> */}
          <MintBtn />
          {/* </Grid> */}
        </Grid>

        <Grid container>
          <Grid item lg={12} className="secThreeHeader" id="Development">
            <Fade bottom>
              <>
                <h1>Book of Gates Graphic Novel NFT</h1>
                <p>
                  In the graphic novel “Book of Gates,” Airborne paratrooper
                  Bruno Giordano signs up for a daring mission to kill Hitler,
                  only to end up fighting Satanists in his own government. Based
                  on the secret history of World War II and the evil cabal that
                  founded NASA and took control of American society.
                </p>
              </>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <div className="secThreeText">
        <Grid container className="boxes">
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              FREE MINT - ARTIFACT LIBRARY
                {/* <span>10/27/2022</span> */}
              </h3>
              <p>Collect weapons, tools and spells to power up the upcoming Character NFTs.</p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              LIMITED EDITION GRAPHIC NOVEL
                {/* <span>10/28/2022</span> */}
              </h3>
              <p>
              Full-color “Book of Gates Volume I” released as a limited edition NFT printing and IRL edition.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              CHARACTER NFT DROP
                {/* <span>TBA</span> */}
              </h3>
              <p>
              10,000 awesome hand-drawn character designs from the Graphic Novel.
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              FREE NFT BREEDING
                {/* <span>Dec. 2022</span> */}
              </h3>
              <p>
              Use the Artifact Library Collection to power up your Character NFT.
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              NFT TRADING GAME
                {/* <span>Dec. 2022</span> */}
              </h3>
              <p>
              Trade, collect and battle other NFT holders in the upcoming Trading Platform.
              </p>
            </div>
          </Fade>

          {/* <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
                NFT Trading Game <span>Jan. 2023</span>
              </h3>
              <p>
                Trade, collect and battle other NFT owners in the upcoming Book
                of Gates Trading Game.
              </p>
            </div>
          </Fade> */}

          {/* <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
                Generation <span> 2 & 3 2023</span>
              </h3>
              <p>
                NFT owners will get WL on Alexander’s new projects, “Alice and
                the Red Queen” and “L.A. Detective Story”
              </p>
            </div>
          </Fade> */}
        </Grid>
      </div>
    </div>
  );
}

export default Secthree;
