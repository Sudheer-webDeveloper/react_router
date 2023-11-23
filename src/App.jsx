import "./App.css";
import Index from "./FirstRouter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./FirstRouter/home";
import About from "./FirstRouter/about";
import Container from "./FirstRouter/container";
import SingleFile from "./FirstRouter/singleFile";
import Layout from "./components/Layout";
import Dashboard from "./host/Dashboard";
import Review from "./host/review";
import Income from "./host/Income";
import HostLayout from "./components/HostLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Layout />}>
            <Route index element={<Index />} /> 
            <Route path="home" element ={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="container" element={<Container />} />
            <Route path="container/:id" element={<SingleFile />} />

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="review" element={<Review />} />
              <Route path="income" element={<Income />} />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;






// <Route path="/container/:id" element={<SingleFile />} />     this line is telling that , when ever we want to create a nested routes, we have to use react parameters

// /container/:id    colon(:) id --> where id is a variable after the container/ if anything user enters then send this page to him or her that is the meanining of that line

//In your route configuration, define a dynamic segment in the path, using a colon ":" followed by a parameter name:

// here id is a dynamic segment , by using colon we are telling to browser it can be changeble so when ever user enters after container then send this page to him we are telling like this to browser






// Intially like this with nested routes

//  <>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Layout />}>
//             {/* we are wrapping the all route path's as a child to the Layout route// so we can acess to the use them as a childeren */}
//             <Route path="/" element={<Index />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/container" element={<Container />} />
//             <Route path="/container/:id" element={<SingleFile />} />

//             <Route path="/host" element={<HostLayout />}>
//               <Route path="/host" element={<Dashboard />} />
//               <Route path="/host/review" element={<Review />} />
//               <Route path="/host/income" element={<Income />} />
//             </Route>


//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </> 








// after relative routes and index routes
// {/* <>
// <BrowserRouter>
//   <Routes>
//     <Route path = "/" element={<Layout />}>
//       {/* we are wrapping the all route path's as a child to the Layout route// so we can acess to the use them as a childeren */}
//     {/* By using Relative routes we no need to put / shlash in front of the every child component , that means every child is relative to the parent component */}
//     {/* //here layout is the parent router to all routes, where hostLayot is  parent router to the DashBoard, review, Income */}

//     {/* index routes when parent route load then after the index route loads */}
//       <Route index element={<Index />} /> 
//       <Route path="home" element ={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="container" element={<Container />} />
//       <Route path="container/:id" element={<SingleFile />} />

//       <Route path="/host" element={<HostLayout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="review" element={<Review />} />
//         <Route path="income" element={<Income />} />
//       </Route>


//     </Route>
//   </Routes>
// </BrowserRouter>
// </> */}







// 1. What is the primary reason to use a nested route?
// Whenever we have some shared UI between routes in our app.

// 2. What is a "Layout Route"?
// It's the parent route of some nested routes that contains just
// the portion of the UI that will be shared. It will use an Outlet
//  component.

// 3. What does the <Outlet /> component do? When do you use it?
//  We use it anytime we have a parent Route that's wrapping
// children routes. It renders the matching child route's
// 'element' prop given in its route definition

// 4. What is an "Index Route"?
//  It's the "default route" we want to render when the path of the parent route matches. It gives us a chance to render  an element inside the parent's <Outlet /> at the same path as the parent route.