import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path:"/contact",
          element: <Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
