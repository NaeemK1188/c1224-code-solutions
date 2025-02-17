import { Banner } from './Banner';
import './RotatingBanner.css';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // const listing = items.map((item) => (
  //   <li>
  //     {item}
  //   </li>

  // ));

  // return (<ul>{listing}</ul>
  //   // output a list of items from App.tsx
  // returns to App.tsx
  return (
    <>
      <Banner items={items} />
      <PrevButton />
      <Indicators />
      <NextButton />
    </>
  );
}
