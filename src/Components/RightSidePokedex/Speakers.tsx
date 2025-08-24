import { useState } from "react";
import "./Speakers.scss";

const Speakers = () => {
  const [pallet] = useState<HTMLAudioElement>(
    new Audio(`./assets/music/PalletTown.mp3`)
  );
  const [gymLeader] = useState<HTMLAudioElement>(
    new Audio(`./assets/music/GymLeader.mp3`)
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
      <button
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(pallet, isPalletPlaying, setIsPalletPlaying);
        }}
      >
        ♫ Pallet town ♫
      </button>
      <button
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(gymLeader, isGymPlaying, setIsGymPlaying);
        }}
      >
        ♫ Gym battle ♫
      </button>
    </div>
  );
};

export default Speakers;
