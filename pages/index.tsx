import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
              <div id="classic" className="h-[40rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center"></p>
                </div>
              </div>
            </div>

            <p className="text-desc-top text-center">SPRAYS</p>
            <div className="grid grid-rows-3 grid-flow-col gap-y-6">
              <div id="classic" className="h-[8rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center"></p>
                </div>
              </div>

              <div id="classic" className="h-[8rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center"></p>
                </div>
              </div>

              <div id="classic" className="h-[8rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[17rem] container mx-auto">
            <p className="text-desc-top text-center">SIDEARMS</p>

            <div className="grid grid-rows-5 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Classic</p>
                </div>
              </div>

              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Shorty</p>
                </div>
              </div>

              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Frenzy</p>
                </div>
              </div>

              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Ghost</p>
                </div>
              </div>

              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Sheriff</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[28rem] container mx-auto">
            <p className="text-desc-top text-center">SMGS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Stinger</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Spectre</p>
                </div>
              </div>
            </div>

            <p className="text-desc-top text-center">SHOTGUNS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Bucky</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Judge</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30rem] container mx-auto">
            <p className="text-desc-top text-center">RIFLES</p>

            <div className="grid grid-rows-4 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Bulldog</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Guardian</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Phantom</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Vandal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[33rem] container mx-auto">
            <p className="text-desc-top text-center">SNIPER RIFLES</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Marshall</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Operator</p>
                </div>
              </div>
            </div>

            <p className="text-desc-top text-center">MACHINE GUNS</p>
            
            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Ares</p>
                </div>
              </div>

              <div id="classic" className="weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Odin</p>
                </div>
              </div>
            </div>

            <p className="text-desc-top text-center">MELEE</p>
            <div className="grid grid-rows-1 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] weaponBox">
                <div id="gun" className="relative"></div>
                <div id="name" className="name">
                  <p className="text-desc-bot text-center">Melee</p>
                </div>
              </div>
            </div>
          </div>

















        </div>
      </div>
    </div>
  );
};

export default Home;
