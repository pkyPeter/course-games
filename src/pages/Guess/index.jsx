import Card from "components/Card";
import React, { useState } from "react";
import Castanets from "assets/instruments/castanets.jpg";
import Cymbals from "assets/instruments/cymbals.jpg";
import Drum from "assets/instruments/drum.jpg";
import IconPiano from "assets/instruments/iron-piano.jpg";
import SandBell from "assets/instruments/sand-bell.jpg";
import SnareDrum from "assets/instruments/snare-drum.jpg";
import Tambourine from "assets/instruments/tambourine.jpg";
import Timpani from "assets/instruments/timpani.jpg";
import Triangle from "assets/instruments/triangle.jpg";
import WoodenFish from "assets/instruments/wooden-fish.jpg";
import Xylophone from "assets/instruments/xylophone.jpg";

const Guess = () => {
  console.log("[Castanets]", Castanets);
  const [instruments, setInstruments] = useState([
    {
      name: "Castanets",
      imgSrc: Castanets,
      flipped: false,
    },
    {
      name: "Cymbals",
      imgSrc: Cymbals,
      flipped: false,
    },
    {
      name: "Drum",
      imgSrc: Drum,
      flipped: false,
    },
    {
      name: "IconPiano",
      imgSrc: IconPiano,
      flipped: false,
    },
    {
      name: "SandBell",
      imgSrc: SandBell,
      flipped: false,
    },
    {
      name: "SnareDrum",
      imgSrc: SnareDrum,
      flipped: false,
    },
    {
      name: "Tambourine",
      imgSrc: Tambourine,
      flipped: false,
    },
    {
      name: "Timpani",
      imgSrc: Timpani,
      flipped: false,
    },
    {
      name: "Triangle",
      imgSrc: Triangle,
      flipped: false,
    },
    {
      name: "WoodenFish",
      imgSrc: WoodenFish,
      flipped: false,
    },
    {
      name: "Xylophone",
      imgSrc: Xylophone,
      flipped: false,
    },
  ]);

  const onClick = (e, name) => {
    console.log("clicked", name);
    setInstruments((prevI) =>
      prevI.map((instrument) =>
        instrument.name === name ? { ...instrument, flipped: true } : instrument
      )
    );
  };

  const onClose = (e, name) => {
    setInstruments((prevI) =>
      prevI.map((instrument) =>
        instrument.name === name
          ? { ...instrument, flipped: false }
          : instrument
      )
    );
  };

  const onRemove = (e, name) => {
    setInstruments((prevI) =>
      prevI.filter((instrument) => instrument.name !== name)
    );
  };

  const toggleAll = (flipped) => {
    setInstruments((prev) => prev.map((ins) => ({ ...ins, flipped })));
  };

  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex justify-center gap-4 bottom-3 w-full">
        <button
          className="rounded border text-main-green px-1.5 py-1 border-main-green bg-white hover:bg-main-green-opacity-6 hover:text-white hover:border-white"
          onClick={(e) => {
            toggleAll(true);
          }}
        >
          掀開全部
        </button>
        <button
          className="rounded border text-main-green px-1.5 py-1 border-main-green bg-white hover:bg-main-green-opacity-6 hover:text-white hover:border-white"
          onClick={(e) => {
            toggleAll(false);
          }}
        >
          開始遊戲
        </button>
      </div>
      {instruments.map((instrument) => {
        return (
          <Card
            key={instrument.name}
            imgSrc={instrument.imgSrc}
            name={instrument.name}
            flipped={instrument.flipped}
            onClick={onClick}
            onClose={onClose}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default Guess;
