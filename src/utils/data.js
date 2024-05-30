import { v4 as uuid } from "uuid";
export const shows = [
  {
    id: uuid(),
    date: "26/03/24",
    time: "20h",
    city: "Paris",
    venue: "Les Disquaires",
    infoLink: "https://lesdisquaires.com/",
  },
  {
    id: uuid(),
    date: "22/06/24",
    time: "TBA",
    city: "Villeneuve sur orge",
    venue: "Metassos",
    infoLink: "https://lesdisquaires.com/",
  },
];

export const musics = [
  {
    id:uuid(),
    title: "Wrong",
    artist: "Spade Diamonds",
    src: "/begining.wav",
    thumbnail: "/sd7.jpeg"
  },
  {
    id:uuid(),
    title: "Tomorrow Will Be The Same",
    artist: "Spade Diamonds",
    src: "/begining.wav",
    thumbnail: "/promo.jpeg"
  },
  {
    id:uuid(),
    title: "Modest Moment",
    artist: "Spade Diamonds",
    src: "/begining.wav",
    thumbnail: "/sd5.jpeg"
  },
  {
    id:uuid(),
    title: "Despite",
    artist: "Spade Diamonds",
    src: "/begining.wav",
    thumbnail: "/sd6.jpeg"
  },
];
