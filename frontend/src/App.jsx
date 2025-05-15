
import './App.css'
import UserForm from './component/share/UserForm'
import Login from './component/share/Login'


// ✅ ADD THESE IMPORTS
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import StudentProfilePage from './component/StudentProfilePage'
import Navbar from './component/share/Navbar'
import Footer from './component/share/Footer'
import WelcomeHome from './component/WelcomeHome'
import About from './component/About'
import Home from './component/Home'
import New from './component/New'
import AllStudents from './component/AllStudensts'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
    ,
    {
      path: "/student/",
      element: <Login />
    },
    {
      path: "/student/form",
      element: <UserForm />
    },
    {
      path: "/student/welcomehome",
      element: <WelcomeHome />
    },
    {
      path: "/student/view",
      element: <StudentProfilePage />
    },
    {
      path: "/student/navbar",
      element: <Navbar />
    },
    {
      path: "/student/footer",
      element: <Footer/>
    },
    {
      path: "/student/about",
      element: <About/>
    },
    {
      path: "/student/new",
      element: <New />
    },
    {
      path: "/admin/students",
      element: <AllStudents />
    },
  ]);
  

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
