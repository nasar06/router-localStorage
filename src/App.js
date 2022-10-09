import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import AddedPlayer from './components/addedPlayer/AddedPlayer';
import Home from './components/home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('wushu.json'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('wushu.json'),
          element: <Home></Home>,
        },
        {
          path:  'addedPlayer',
          element: <AddedPlayer></AddedPlayer>
        }
      ]
    },
    {
      path: 'about',
      element: <About></About>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;



