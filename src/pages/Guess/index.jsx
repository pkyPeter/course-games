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
  console.log('[Castanets]', Castanets)
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
    console.log('clicked', name)
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
      prevI.filter((instrument) => instrument.name === name)
    );
  };

  return (
    <div className="flex flex-wrap gap-6">
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
