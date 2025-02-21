import './About.css';
import { Link } from 'react-router-dom';

// not showing up yet because we didn't Route to it in App()
export function About() {
  return (
    <div className="m-0 h-screen bg-no-repeat">
      <div>
        <Link to="/" className="p-3 text-gray-600 cursor-pointer">
          &lt; Back to Catalog
        </Link>
      </div>
      <div className="m-auto pt-20 w-1/2 text-center text-2x1">
        What an Amazing Catalog
      </div>
      <img
        className="resizing-img"
        src="/images/ostrich-pillow.jpg"
        alt="amazing catalog"
      />
    </div>
  );
}

// bg - [url('/images/ostrich-pillow.jpg')];
