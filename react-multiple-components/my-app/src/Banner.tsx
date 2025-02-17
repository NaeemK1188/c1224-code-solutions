import './Banner.css';
type Props = {
  items: string[];
};

export function Banner({ items }: Props) {
  // const listing = items.map((item) => (
  //   <li>
  //     {item}
  //   </li>
  // ));
  // returns to RotatingBanner.tsx
  // return <ul>{listing}</ul>
  return <h1 className="banner-h1">{items[0]}</h1>;
}
