import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';

import "../global.css";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
