import './Banner.css';
type Props = {
  item: string;
};

// we are receiving one item from the parent
// then returning one item to parent
export function Banner({ item }: Props) {
  // const listing = items.map((item) => (
  //   <li>
  //     {item}
  //   </li>
  // ));
  // returns to RotatingBanner.tsx
  // return <ul>{listing}</ul>
  return <h1 className="banner-h1">{item}</h1>;
}
