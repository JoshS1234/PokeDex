import React, { useEffect, useState } from "react";
import "./Speakers.scss";

const Speakers = () => {
  const [pallet, setPallet] = useState<HTMLAudioElement>(
    new Audio(`src/assets/music/PalletTown.mp3`)
  );
  const [gymLeader, setGymLeader] = useState<HTMLAudioElement>(
    new Audio(`src/assets/music/GymLeader.mp3`)
  );
  const [isPalletPlaying, setIsPalletPlaying] = useState(false);
  const [isGymPlaying, setIsGymPlaying] = useState(false);

  const togglePlayMusicFile = (
    audioConst: HTMLAudioElement,
    isCurrentlyPlaying: boolean,
    setIsCurrentlyPlaying: (boolToSet: boolean) => void
  ) => {
    if (!isCurrentlyPlaying) {
      audioConst.play();
    } else {
      audioConst.pause();
    }
    setIsCurrentlyPlaying(!isCurrentlyPlaying);
  };
  return (
    <div className="speakerContainer">
      <p
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(pallet, isPalletPlaying, setIsPalletPlaying);
        }}
      >
        ♫ Pallet town ♫
      </p>
      <p
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(gymLeader, isGymPlaying, setIsGymPlaying);
        }}
      >
        ♫ Gym battle ♫
      </p>
    </div>
  );
};

export default Speakers;
