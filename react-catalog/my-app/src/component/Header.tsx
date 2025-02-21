import './Header.css';
import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <Link to="/about" className="text-white adding-cursor">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4 adding-cursor">
            <Link to="/" className="text-white adding-cursor">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
