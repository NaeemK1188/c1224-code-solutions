import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcList: string[] = ['/starry-sky.jpeg', '/nfs-heat.jpeg', '/cat_.jpeg'];
const captionList: string[] = [
  'A Beautiful Image of Space',
  'NFS the Heat Theme',
  'Cat Wearing Glasses',
];
const descriptionList: string[] = [
  'This is the sky of milky way',
  'A cool racing car in NFS The Heat',
  'A wonderful cat with glasses',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      {/* calling image component with an array of sources parameter*/}
      <Image src={srcList} />
      <Caption caption={captionList} />
      <Description text={descriptionList} />
      <Button label="Click for Next Image" />
    </>
  );
}
