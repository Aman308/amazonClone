
import './App.css';
import Box from './components/body/Box';
import Maincards from './components/body/Maincads';
import Carussel from './components/body/Carussel';
import Cardcontainer from './components/body/Cardcontainer';
import Imageslider from './components/body/Imageslider';
import Multiplebox from './components/body/Multiplebox';
import Category from './components/header/Category';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Category/>
    <Imageslider/>
    <Box/>
    <Multiplebox/>
    <Cardcontainer/>
    <Maincards/>
    <Carussel/>
    <Footer/>
    </>
  );
}

export default App;
