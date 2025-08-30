import { v4 as uuid } from 'uuid';
export const shows = [
  {
    id: uuid(),
    date: '22/06/24',
    year: '2024',
    time: '21h',
    city: 'Villemoisson sur Orge, France',
    venue: 'Gymnase',
    infoLink: 'google.com',
    isInfo: true,
  },
  {
    id: uuid(),
    date: '13/07/24',
    year: '2024',
    time: '',
    city: 'Paris',
    venue: 'Le Truskel, France',
    infoLink: '',
    isInfo: false,
  },
];

export const musics = [
  {
    id: uuid(),
    title: 'Wrong',
    artist: 'Spade Diamonds',
    src: '/begining.wav',
    thumbnail: '/sd7.jpeg',
  },
  {
    id: uuid(),
    title: 'Tomorrow Will Be The Same',
    artist: 'Spade Diamonds',
    src: '/atonement.mp3',
    thumbnail: '/promo.jpeg',
  },
  {
    id: uuid(),
    title: 'Modest Moment',
    artist: 'Spade Diamonds',
    src: '/begining.wav',
    thumbnail: '/sd5.jpeg',
  },
  {
    id: uuid(),
    title: 'Despite',
    artist: 'Spade Diamonds',
    src: '/atonement.mp3',
    thumbnail: '/sd6.jpeg',
  },
];

export const videos = [
  {
    id: uuid(),
    youtubeId: '3XTls-Wl4YM',
  },
  {
    id: uuid(),
    youtubeId: 'wfbKvRoIeZg',
  },
  // {
  //   id: uuid(),
  //   youtubeId: 'lEmsZZuWJPg',
  // },
  // {
  //   id: uuid(),
  //   youtubeId: 'd2A6kOnFSxs',
  // },
  // {
  //   id: uuid(),
  //   youtubeId: 'ypFYE2ZZJHg',
  // },
  // {
  //   id: uuid(),
  //   youtubeId: 'pyv_s5rPY_8',
  // },
];
