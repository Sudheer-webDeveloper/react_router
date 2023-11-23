import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";




function HostLayout() {
  return (
    <nav>
      <NavLink
        to="/host" end
        className={({ isActive }) => (isActive ? "main-link" : 'normal-link')}
      >
        Dashboard
      </NavLink>
      <NavLink to="/host/review"  className={({ isActive }) => (isActive ? "main-link" : 'normal-link')}>Review</NavLink>
      <NavLink to="/host/income"  className={({ isActive }) => (isActive ? "main-link" : 'normal-link')}>Income</NavLink>

      <Outlet />
    </nav>
  );
}

export default HostLayout;

// NavLink and Link do the same acttions but NavLink provides the function called Is avtive .... by using that we can add styles to it

//  <Link to="/host" style={{marginRight:"10px"}}>Dashboard</Link>
// <Link to="/host/review" style={{marginRight:"10px"}}>Review</Link>
// <Link to="/host/income" style={{marginRight:"10px"}}>Income</Link>

// Both `NavLink` and `Link` are components provided by the `react-router-dom` library, but they have slightly different functionalities.

// 1. `Link` component:
// The `Link` component is used to create a hyperlink to a specific route in your application. It renders an `<a>` tag with an `href` attribute pointing to the specified route. When you click on a `Link` component, it triggers a navigation event, causing the corresponding component to render.

// Here's an example of how to use `Link`:
// ```jsx
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home page!</h1>
//       <Link to="/about">Go to About page</Link>
//     </div>
//   );
// };
// ```
// In this example, when the user clicks on the "Go to About page" link, it will navigate to the `/about` route.

// 2. `NavLink` component:
// The `NavLink` component is similar to `Link`, but it provides additional features for styling links based on the current active route. The `NavLink` component adds the `active` class to the rendered element when its `to` route matches the current route.

// Here's an example of how to use `NavLink`:
// ```jsx
// import { NavLink } from 'react-router-dom';

// const NavigationBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" activeClassName="active">
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" activeClassName="active">
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// ```
// In this example, when the current route matches the `to` prop of a `NavLink`, the `active` class will be applied to that NavLink. This allows you to style the active link differently, highlighting it, for example.

// In summary, `NavLink` is an extended version of `Link` that adds support for styling the active link based on the current route. If you need to highlight the active link, use `NavLink`, otherwise, you can use `Link` for regular navigation.
