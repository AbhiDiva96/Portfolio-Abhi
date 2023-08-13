
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>main page</h1> */}

      <Header />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      < Footer />
    </div>
  );
}

export default App;
