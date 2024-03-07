import './App.css';
import Body from './components/Body';
import './components/Header';
import Header from './components/Header';
import {Provider} from "react-redux";
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
