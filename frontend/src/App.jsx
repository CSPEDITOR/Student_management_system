import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './component/share/UserForm'
import Login from './component/share/Login'
import Home from './component/Home'

// ✅ ADD THESE IMPORTS
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import StudentProfilePage from './component/StudentProfilePage'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/student/",
      element: <Login />
    },
    {
      path: "/student/form",
      element: <UserForm />
    },
    {
      path: "/student/home",
      element: <Home />
    },
    {
      path: "/student/view",
      element: <StudentProfilePage />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
