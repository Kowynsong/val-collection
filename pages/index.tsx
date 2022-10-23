import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import { playercards, sprays, sidearm1, sidearm2, sidearm3, sidearm4, sidearm5, smg1, smg2, shotgun1, shotgun2, rifle1, rifle2, rifle3, rifle4, sniper1, sniper2, mg1, mg2, melee} from "../images";

const Home: NextPage = () => { 
  return (
    // valDark: #192033
    // valLight: #6796bf
    /* 
    Name               Pixels   Rem          Ratio
    ---------------------16pxs=1rem------------------------
    Resolution	       2560x1440
    player card	       269x644  16.81x40.25  1.00x3.43
    spray	             269x133  16.81x08.31  1.00x0.71
    sidearm	           269x188  16.81x11.75  1.00x1.00
    smg, shotgun	     443x188  27.69x11.75  1.65x1.00
    rifle	             487x188  30.44x11.75  1.81x1.00
    sniper, mg, melee  526x188  32.88x11.75  1.96x1.00
    */

    <div className="bg-black">
      <div className="bg-gradient-to-t from-val-light to-val-dark aspect container mx-auto">
        <div className="flex flex-row">
          <div className="w-[17rem] container mx-auto">
            <p className="text-desc-top text-center">PLAYER CARDS</p>

            <div className="grid grid-rows-1 grid-flow-col gap-y-6">
            <div id="playercards" className="h-[39rem] relative">
                  <Carousel
                    images={playercards}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>

            <p className="text-desc-top text-center">SPRAYS</p>
            <div className="grid grid-rows-3 grid-flow-col gap-y-6">
            <div id="preround" className="h-[8rem] relative">
                  <Carousel
                    images={sprays}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="midround" className="h-[8rem] relative">
                  <Carousel
                    images={sprays}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="postround" className="h-[8rem] relative">
                  <Carousel
                    images={sprays}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>
          </div>

          <div className="w-[17rem] container mx-auto">
            <p className="text-desc-top text-center">SIDEARMS</p>

            <div className="grid grid-rows-5 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] relative">
                  <Carousel
                    className="object-contain"
                    images={sidearm1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>

              <div id="shorty" className="h-[12rem] relative">
                  <Carousel
                    images={sidearm2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>

              <div id="frenzy" className="h-[12rem] relative">
                  <Carousel
                    images={sidearm3}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="ghost" className="h-[12rem] relative">
                  <Carousel
                    images={sidearm4}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="sheriff" className="h-[12rem] relative">
                  <Carousel
                    images={sidearm5}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>
          </div>

          <div className="w-[28rem] container mx-auto">
            <p className="text-desc-top text-center">SMGS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="stinger" className="h-[12rem] relative">
                  <Carousel
                    images={smg1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>

              <div id="spectre" className="h-[12rem] relative">
                  <Carousel
                    images={smg2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>

            <p className="text-desc-top text-center">SHOTGUNS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
            <div id="bucky" className="h-[12rem] relative">
                  <Carousel
                    images={shotgun1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>

              <div id="judge" className="h-[12rem] relative">
                  <Carousel
                    images={shotgun2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>
          </div>

          <div className="w-[30rem] container mx-auto">
            <p className="text-desc-top text-center">RIFLES</p>

            <div className="grid grid-rows-4 grid-flow-col gap-y-6">
            <div id="bulldog" className="h-[12rem] relative">
                  <Carousel
                    images={rifle1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="guardian" className="h-[12rem] relative">
                  <Carousel
                    images={rifle2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="phantom" className="h-[12rem] relative">
                  <Carousel
                    images={rifle3}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="vandal" className="h-[12rem] relative">
                  <Carousel
                    images={rifle4}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>

            </div>
          </div>

          <div className="w-[33rem] container mx-auto">
            <p className="text-desc-top text-center">SNIPER RIFLES</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
            <div id="marshall" className="h-[12rem] relative">
                  <Carousel
                    images={sniper1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="operator" className="h-[12rem] relative">
                  <Carousel
                    images={sniper2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>

            <p className="text-desc-top text-center">MACHINE GUNS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
            <div id="ares" className="h-[12rem] relative">
                  <Carousel
                    images={mg1}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
              <div id="odin" className="h-[12rem] relative">
                  <Carousel
                    images={mg2}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>

            <p className="text-desc-top text-center">MELEE</p>
            <div className="grid grid-rows-1 grid-flow-col gap-y-6">
            <div id="melee" className="h-[12rem] relative">
                  <Carousel
                    images={melee}
                    hasMediaButton={false}
                    hasSizeButton={false}
                    hasIndexBoard={false}
                    hasThumbnails={false}
                    hasThumbnailsAtMax={true}
                    hasCaptions='bottom'
                    shouldMaximizeOnClick={true}
                    shouldMinimizeOnClick={true}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
