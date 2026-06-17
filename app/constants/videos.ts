import type { VideoSource } from '../components/LazyVideo';

export const HERO_VIDEO_POSTER = '/videos/hero-poster.webp';
export const WORK_CAPTIONS = '/videos/work-captions.vtt';

export const HERO_VIDEO_SOURCES: VideoSource[] = [
  { src: '/videos/hero-720.webm', type: 'video/webm; codecs=vp9', media: '(min-width: 769px)' },
  { src: '/videos/hero-720.mp4', type: 'video/mp4', media: '(min-width: 769px)' },
  { src: '/videos/hero-mobile.mp4', type: 'video/mp4', media: '(max-width: 768px)' },
];

export const WORK_VIDEO_POSTER = '/videos/work-poster.webp';

export const WORK_VIDEO_SOURCES: VideoSource[] = [
  { src: '/videos/work-720.mp4', type: 'video/mp4' },
];
