import './App.scss';
import {BrowserRouter as Router,Routes,Route,Redirect} from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<SplashScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
