import "./global.scss"
import Header from './component/Header';
import Home from './component/Home';
import store from "./store";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
