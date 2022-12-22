import Intro from './Components/Intro'
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Trending from './Components/Trending'
import Action from './Components/Action'
import "./Style/landingPage.css";


function App() {
  return (
    <><div className="myBG">
      <NavigationBar />
      <Intro />
    </div><div className="trending">
        <Trending />
      </div><div className='action'>
        <Action />
      </div></>
  );
}

export default App;
