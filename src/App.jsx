import './App.css';
import Body from './components/Body';
import './components/Header';
import Header from './components/Header';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/> 
      }
    ]
  }  
])

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
