
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="">
      <TopBanner></TopBanner>
      <Navbar></Navbar>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
