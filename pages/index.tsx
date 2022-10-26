import type { GetStaticProps, NextPage } from "next";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import { createClient } from "@supabase/supabase-js";

type Skin = {
  id: number;
  name: string;
  gun: string;
  fileName: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
  const { data: classic } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Classic")
    .order("id");
  const { data: shorty } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Shorty")
    .order("id");
  const { data: frenzy } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Frenzy")
    .order("id");
  const { data: ghost } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Ghost")
    .order("id");
  const { data: sheriff } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Sheriff")
    .order("id");
  const { data: stinger } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Stinger")
    .order("id");
  const { data: spectre } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Spectre")
    .order("id");
  const { data: bucky } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Bucky")
    .order("id");
  const { data: judge } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Judge")
    .order("id");
  const { data: bulldog } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Bulldog")
    .order("id");
  const { data: guardian } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Guardian")
    .order("id");
  const { data: phantom } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Phantom")
    .order("id");
  const { data: vandal } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Vandal")
    .order("id");
  const { data: marshall } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Marshall")
    .order("id");
  const { data: operator } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Operator")
    .order("id");
  const { data: ares } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Ares")
    .order("id");
  const { data: odin } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Odin")
    .order("id");
  const { data: melee } = await supabaseAdmin
    .from("valData")
    .select("*")
    .eq("gun", "Melee")
    .order("id");

  return {
    props: {
      images01: classic,
      images02: shorty,
      images03: frenzy,
      images04: ghost,
      images05: sheriff,
      images06: stinger,
      images07: spectre,
      images08: bucky,
      images09: judge,
      images10: bulldog,
      images11: guardian,
      images12: phantom,
      images13: vandal,
      images14: marshall,
      images15: operator,
      images16: ares,
      images17: odin,
      images18: melee,
    },
  };
};

const Home: NextPage<{
  images01: Skin[];
  images02: Skin[];
  images03: Skin[];
  images04: Skin[];
  images05: Skin[];
  images06: Skin[];
  images07: Skin[];
  images08: Skin[];
  images09: Skin[];
  images10: Skin[];
  images11: Skin[];
  images12: Skin[];
  images13: Skin[];
  images14: Skin[];
  images15: Skin[];
  images16: Skin[];
  images17: Skin[];
  images18: Skin[];
}> = ({
  images01,
  images02,
  images03,
  images04,
  images05,
  images06,
  images07,
  images08,
  images09,
  images10,
  images11,
  images12,
  images13,
  images14,
  images15,
  images16,
  images17,
  images18,
}) => {
  const classics = images01.map(
    (classic: { fileName: string; name: string }) => ({
      src: `/col1/classic/${classic.fileName}`,
      alt: `${classic.name} Classic`,
    })
  );
  const shortys = images02.map(
    (shorty: { fileName: string; name: string }) => ({
      src: `/col1/shorty/${shorty.fileName}`,
      alt: `${shorty.name} Shorty`,
    })
  );
  const frenzys = images03.map(
    (frenzy: { fileName: string; name: string }) => ({
      src: `/col1/frenzy/${frenzy.fileName}`,
      alt: `${frenzy.name} Frenzy`,
    })
  );
  const ghosts = images04.map((ghost: { fileName: string; name: string }) => ({
    src: `/col1/ghost/${ghost.fileName}`,
    alt: `${ghost.name} Ghost`,
  }));
  const sheriffs = images05.map(
    (sheriff: { fileName: string; name: string }) => ({
      src: `/col1/sheriff/${sheriff.fileName}`,
      alt: `${sheriff.name} Sheriff`,
    })
  );
  const stingers = images06.map(
    (stinger: { fileName: string; name: string }) => ({
      src: `/col2/stinger/${stinger.fileName}`,
      alt: `${stinger.name} Stinger`,
    })
  );
  const spectres = images07.map(
    (spectre: { fileName: string; name: string }) => ({
      src: `/col2/spectre/${spectre.fileName}`,
      alt: `${spectre.name} Spectre`,
    })
  );
  const buckys = images08.map((bucky: { fileName: string; name: string }) => ({
    src: `/col2/bucky/${bucky.fileName}`,
    alt: `${bucky.name} Bucky`,
  }));
  const judges = images09.map((judge: { fileName: string; name: string }) => ({
    src: `/col2/judge/${judge.fileName}`,
    alt: `${judge.name} Judge`,
  }));
  const bulldogs = images10.map(
    (bulldog: { fileName: string; name: string }) => ({
      src: `/col3/bulldog/${bulldog.fileName}`,
      alt: `${bulldog.name} Bulldog`,
    })
  );
  const guardians = images11.map(
    (guardian: { fileName: string; name: string }) => ({
      src: `/col3/guardian/${guardian.fileName}`,
      alt: `${guardian.name} Guardian`,
    })
  );
  const phantoms = images12.map(
    (phantom: { fileName: string; name: string }) => ({
      src: `/col3/phantom/${phantom.fileName}`,
      alt: `${phantom.name} Phantom`,
    })
  );
  const vandals = images13.map(
    (vandal: { fileName: string; name: string }) => ({
      src: `/col3/vandal/${vandal.fileName}`,
      alt: `${vandal.name} Vandal`,
    })
  );
  const marshalls = images14.map(
    (marshall: { fileName: string; name: string }) => ({
      src: `/col4/marshall/${marshall.fileName}`,
      alt: `${marshall.name} Marshall`,
    })
  );
  const operators = images15.map(
    (operator: { fileName: string; name: string }) => ({
      src: `/col4/operator/${operator.fileName}`,
      alt: `${operator.name} Operator`,
    })
  );
  const aress = images16.map((ares: { fileName: string; name: string }) => ({
    src: `/col4/ares/${ares.fileName}`,
    alt: `${ares.name} Ares`,
  }));
  const odins = images17.map((odin: { fileName: string; name: string }) => ({
    src: `/col4/odin/${odin.fileName}`,
    alt: `${odin.name} Odin`,
  }));
  const melees = images18.map((melee: { fileName: string; name: string }) => ({
    src: `/col4/melee/${melee.fileName}`,
    alt: `${melee.name} Melee`,
  }));
  // const playercards = images19.map((playercard: { fileName: string, name: string }) => ({
  //   src: `/col1/playercard/${playercard.fileName}`,
  //   alt: `${playercard.name}`,
  // }));
  // const sprays = images20.map((spray: { fileName: string, name: string }) => ({
  //   src: `/col1/spray/${spray.fileName}`,
  //   alt: `${spray.name}`,
  // }));
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
      <div className="bg-gradient-to-t from-val-light to-val-dark aspect-video container mx-auto">
        <div className="flex flex-row">
          <div className="w-[17rem] mt-28 container mx-auto">
            <p className="text-desc-top text-center">PLAYER CARDS</p>

            <div className="grid grid-rows-1 grid-flow-col gap-y-6">
              <div
                id="playercards"
                className="h-[39rem] bg-slate-500	relative"
              ></div>
            </div>

            <p className="text-desc-top text-center">SPRAYS</p>
            <div className="grid grid-rows-3 grid-flow-col gap-y-6">
              <div
                id="preround"
                className="h-[8rem] bg-slate-500	 relative"
              ></div>
              <div
                id="midround"
                className="h-[8rem] bg-slate-500	relative"
              ></div>
              <div
                id="postround"
                className="h-[8rem] bg-slate-500	relative"
              ></div>
            </div>
          </div>

          <div className="w-[17rem] mt-28 container mx-auto">
            <p className="text-desc-top text-center">SIDEARMS</p>

            <div className="grid grid-rows-5 grid-flow-col gap-y-6">
              <div id="classic" className="h-[12rem] relative">
                <Carousel
                  images={classics}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>

              <div id="shorty" className="h-[12rem] relative">
                <Carousel
                  images={shortys}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>

              <div id="frenzy" className="h-[12rem] relative">
                <Carousel
                  images={frenzys}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="ghost" className="h-[12rem] relative">
                <Carousel
                  images={ghosts}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="sheriff" className="h-[12rem] relative">
                <Carousel
                  images={sheriffs}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>
          </div>

          <div className="w-[28rem] mt-28 container mx-auto">
            <p className="text-desc-top text-center">SMGS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="stinger" className="h-[12rem] relative">
                <Carousel
                  images={stingers}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>

              <div id="spectre" className="h-[12rem] relative">
                <Carousel
                  images={spectres}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>

            <p className="text-desc-top text-center">SHOTGUNS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="bucky" className="h-[12rem] relative">
                <Carousel
                  images={buckys}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>

              <div id="judge" className="h-[12rem] relative">
                <Carousel
                  images={judges}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>
          </div>

          <div className="w-[30rem] mt-28 container mx-auto">
            <p className="text-desc-top text-center">RIFLES</p>

            <div className="grid grid-rows-4 grid-flow-col gap-y-6">
              <div id="bulldog" className="h-[12rem] relative">
                <Carousel
                  images={bulldogs}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="guardian" className="h-[12rem] relative">
                <Carousel
                  images={guardians}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="phantom" className="h-[12rem] relative">
                <Carousel
                  images={phantoms}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="vandal" className="h-[12rem] relative">
                <Carousel
                  images={vandals}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>
          </div>

          <div className="w-[33rem] mt-28 container mx-auto">
            <p className="text-desc-top text-center">SNIPER RIFLES</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="marshall" className="h-[12rem] relative">
                <Carousel
                  images={marshalls}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="operator" className="h-[12rem] relative">
                <Carousel
                  images={operators}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>

            <p className="text-desc-top text-center">MACHINE GUNS</p>

            <div className="grid grid-rows-2 grid-flow-col gap-y-6">
              <div id="ares" className="h-[12rem] relative">
                <Carousel
                  images={aress}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
              <div id="odin" className="h-[12rem] relative">
                <Carousel
                  images={odins}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
                  shouldMaximizeOnClick={true}
                  shouldMinimizeOnClick={true}
                />
              </div>
            </div>

            <p className="text-desc-top text-center">MELEE</p>
            <div className="grid grid-rows-1 grid-flow-col gap-y-6">
              <div id="melee" className="h-[12rem] relative">
                <Carousel
                  images={melees}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasIndexBoard={false}
                  hasThumbnails={false}
                  hasThumbnailsAtMax={true}
                  hasCaptions="bottom"
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
