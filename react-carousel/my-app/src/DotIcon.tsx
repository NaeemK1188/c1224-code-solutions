import { GoDot, GoDotFill } from 'react-icons/go';
import './DotIcon.css';

export function DotIcon() {
  return (
    <div className="dot-container">
      <GoDotFill size="40px" />
      <GoDot size="40px" />
      <GoDot size="40px" />
      <GoDot size="40px" />
      <GoDot size="40px" />
      <GoDot size="40px" />
    </div>
  );
}
