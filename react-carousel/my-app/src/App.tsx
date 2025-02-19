import './App.css';
import { Carousel } from './Carousel';

export type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: '/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

function App() {
  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      <Carousel images={images} />
    </>
  );
}

export default App;
