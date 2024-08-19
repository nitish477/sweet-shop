import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
const route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<h1>About</h1>
  },
  {
    path:"/contact",
    element:<h1>Contact</h1>
  }
])
root.render(<RouterProvider router={route}/>);
