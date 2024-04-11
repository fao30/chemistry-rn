import { NativeModules } from 'react-native';

const { SoundPlayer } = NativeModules;

interface Player {
  playSound(soundNumber: string): void;
  stopSound(): void;
}

export default SoundPlayer as Player;
