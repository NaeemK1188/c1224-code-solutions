import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  console.log('rendering AppDrawer');
  const [isOpen, setIsOpen] = useState(true);
  let textContent = '';
  let is_Open = '';

  function handleDrawer() {
    console.log('handleDrawer is called', isOpen);
    if (isOpen === true) {
      // if its open, set it to close when its clicked

      setIsOpen(false);
    } else if (isOpen === false) {
      // if       setIsOpen(true);
    }
  }

  // we used the if/else outside so it gets the values updated outside the eventHandler

  if (isOpen === true) {
    is_Open = 'is-open';
    textContent = 'Shopping Bazaar';
  } else if (isOpen === false) {
    is_Open = 'is-close';
    textContent = '';
  }

  // eventhandlers like onClick only update the state or using stateSetter functions
  // So, if we want to use the or set both classes and textContent inside the eventHandler onClick
  // we should use state and state setter for each
  // or we need to use the if/else outside like in line 32-38
  // the state setter when its clicked, it update the cache and put the rerender in the event queue
  // then after state setter is called, it checks the event queue, so it goes the component again, and sees the
  // the cache or isOpen has changed from true to false, so read if statement, and execute the body of
  // false statement
  console.log(is_Open, textContent);
  return (
    // the parent div making all divs to be display:flex to be side by side
    // using tailwind class flex w-full
    <div className="flex w-full">
      <div className={`menu-drawer ${is_Open}`}>
        <FaBars onClick={handleDrawer} className="menu-icon" />
        <h3 className="menu-heading">{textContent}</h3>
        <ul className="menu-items">
          {menuItems.map((menu) => (
            <li key={menu.name} className="menu-item">
              <NavLink to={menu.path} className="menu-link">
                {menu.name === 'About' ? (
                  <img src="/hylian-emblem.svg" className="item-icon" />
                ) : (
                  <img src="/catalog.png" className="item-icon" />
                )}
                {/* to control the menu names to disappear when closing side nav */}
                {isOpen === true ? menu.name : ''}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

// html structure of the drawer
// menu item html structure
{
  /* <ul className="menu-items">
  <li key="some key" className="menu-item">
    <Link to="menu path" className="menu-link">
      <img src="menu icon" className="item-icon" />
      Menu Name
    </Link>
  </li>
</ul>; */
}

// regular top nav bar
//  <div>
//       <nav className="px-4 text-white bg-gray-900">
//         <ul>
//           {menuItems.map((menu) => (
//             <li key={menu.name} className="inline-block py-2 px-4">
//               <Link to={menu.path} className="text-white">
//                 {menu.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
