import './Header.css';

type Props = {
  text: string;
};

// assigning what in Props to text string
export function Header({ text }: Props) {
  return <h1>{text}</h1>;
}
