import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/Blog"
import ErrorPage from "./pages/ErrorPage"
import Profile from "./pages/Profile"

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/Blog',
      element: <Blog/>
    },
    {
      path: '/Profile',
      element: <Profile/>
    }
  ])

  return(
    <RouterProvider router={router}/>
  )
}
export default App


// import { createBrowserRouter, RouterProvider} from "react-router-dom"
// import Home from "./pages/home"
// import Blog from "./pages/Blog"
// import About from "./pages/About"
// import Profile from "./pages/Profile"
// import LogOut from "./pages/LogOut"
// import Sign from "./pages/Sign"
// import ErrorPage from "./pages/ErrorPage"

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Home/>,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: 'Blog',
//     element: <Blog/>
//   },
//   {
//     path: '/About',
//     element: <About/>
//   },
//   {
//     path: '/Profile',
//     element: <Profile/>
//   },
//   {
//     path: '/LogOut',
//     element: <LogOut/>
//   },
//   {
//     path: '/Sign',
//     element: <Sign/>
//   }
// ])
// // const App = () => {
// //   return(
// //     <RouterProvider router={router}/>
// //   )
// // }

// // export default