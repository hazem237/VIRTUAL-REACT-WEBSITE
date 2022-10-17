
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {


  return (
   <>
   <Router>
    <NavBar />
    
    <Routes>
     <Route path='/' element = {<Home />} />
      <Route path='/services' element = {<Services />} />
     </Routes>
     <Footer />
    </Router>
   
   </>
  );
}

export default App;
