import { useCallback } from 'react';
import { AppState } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Settings } from '../store/reducer/settings';
import SoundPlayer from './SoundPlayer';

// the sound last started; the native player plays one at a time
let playing: number | undefined;

// Plays on every focus, not just on mount: the header's navigate() goes back to
// a screen already in the stack (e.g. Solubility -> Reactivity -> Solubility)
// instead of remounting it, so a mount-only effect would stay silent.
const AudioHandler = (n: number, settings: Settings) => {
  useFocusEffect(
    useCallback(() => {
      StartPlayingAudio(n, settings);

      // leaving the app (the remote's Home button) does not blur the screen,
      // so stop the narration from playing on over the TV's home screen
      const appState = AppState.addEventListener('change', state => {
        if (state !== 'active' && playing === n) {
          StopPlayingAudio();
        }
      });

      return () => {
        appState.remove();
        // The screen being left blurs after the next one has focused, so only
        // stop our own sound, not the one the next screen just started.
        if (playing === n) {
          StopPlayingAudio();
        }
      };
    }, [n, settings.playSound]),
  );
};

export const StopPlayingAudio = () => {
  playing = undefined;
  SoundPlayer.stopSound();
};

export const StartPlayingAudio = (n: number, settings: Settings) => {
  if (settings.playSound) {
    playing = n;
    SoundPlayer.playSound(n.toString());
  }
};

export default AudioHandler;
