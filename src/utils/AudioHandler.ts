import { useEffect } from 'react';
import { Settings } from '../store/reducer/settings';
import SoundPlayer from './SoundPlayer';

const AudioHandler = (n: number, settings: Settings) => {
  useEffect(() => {
    if (settings.playSound) {
      SoundPlayer.playSound(n.toString());
    }

    return () => {
      StopPlayingAudio();
    };
  }, []);
};

export const StopPlayingAudio = () => {
  SoundPlayer.stopSound();
};

export const StartPlayingAudio = (n: number, settings: Settings) => {
  if (settings.playSound) {
    SoundPlayer.playSound(n.toString());
  }
};

export default AudioHandler;
