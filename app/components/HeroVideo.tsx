'use client';

import LazyVideo from './LazyVideo';
import { HERO_VIDEO_POSTER, HERO_VIDEO_SOURCES } from '../constants/videos';

/** Client-only hero background video — loaded after user interaction. */
export default function HeroVideo() {
  return (
    <div className="absolute inset-0 w-full h-full z-[1]" aria-hidden="true">
      <LazyVideo
        sources={HERO_VIDEO_SOURCES}
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full"
        decorative
      />
    </div>
  );
}
