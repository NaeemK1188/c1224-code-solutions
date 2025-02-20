import './Header.css';
import { Outlet, Link } from 'react-router-dom';

// suing view swapping based on click. The URL browser bar is fixed and no back/ forward options
// fixed part always shown in every page
//Now Header matches what in the App(), which is no props
export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            {/* to is the path */}
            <Link to="/about" className="text-white adding-cursor">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4">
            {/* dashboard is the homepage */}
            <Link to="/" className="text-white adding-cursor">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here
      so first the navbar then the rest of the contents re in OutLet
      put the page contents in Outlet*/}
      <Outlet />
      {/* its rendered on all the pages */}
      {/* where ever we put the outLet, out contents will go  */}
      <div>Copyright 2025</div>
    </div>
  );
}
