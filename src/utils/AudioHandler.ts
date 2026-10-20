import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Settings } from '../store/reducer/settings';
import SoundPlayer from './SoundPlayer';

// Plays on every focus, not just on mount: the header's navigate() goes back to
// a screen already in the stack (e.g. Solubility -> Reactivity -> Solubility)
// instead of remounting it, so a mount-only effect would stay silent.
const AudioHandler = (n: number, settings: Settings) => {
  useFocusEffect(
    useCallback(() => {
      if (settings.playSound) {
        SoundPlayer.playSound(n.toString());
      }

      return () => {
        StopPlayingAudio();
      };
    }, [n, settings.playSound]),
  );
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
