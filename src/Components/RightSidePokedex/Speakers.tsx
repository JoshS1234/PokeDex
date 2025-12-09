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
    setIsCurrentlyPlaying: (boolToSet: boolean) => void,
    otherAudio: HTMLAudioElement,
    isOtherPlaying: boolean,
    setIsOtherPlaying: (boolToSet: boolean) => void
  ) => {
    if (!isCurrentlyPlaying) {
      // Stop the other audio if it's playing
      if (isOtherPlaying) {
        otherAudio.pause();
        otherAudio.currentTime = 0; // Reset to beginning
        setIsOtherPlaying(false);
      }
      audioConst.play();
      setIsCurrentlyPlaying(true);
    } else {
      audioConst.pause();
      setIsCurrentlyPlaying(false);
    }
  };
  return (
    <div className="speakerContainer">
      <button
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(
            pallet,
            isPalletPlaying,
            setIsPalletPlaying,
            gymLeader,
            isGymPlaying,
            setIsGymPlaying
          );
        }}
      >
        ♫ Pallet town ♫
      </button>
      <button
        className="speaker"
        onClick={() => {
          togglePlayMusicFile(
            gymLeader,
            isGymPlaying,
            setIsGymPlaying,
            pallet,
            isPalletPlaying,
            setIsPalletPlaying
          );
        }}
      >
        ♫ Gym battle ♫
      </button>
    </div>
  );
};

export default Speakers;
