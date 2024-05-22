//import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import Main from './Components/Main';
// import Services from './Components/Services/Services';
// import Key from './Components/Key/Key';
// import Project from './Components/Projects/Project';
// import About from './Components/About/About';
//import Testimonials from './Components/Testimonials/Testimonials';
// import Contact from './Components/Contact/Contact';
// import Test from './Components/Test/Test';
// import ServicesOne from './Components/ServicesPage/ServicesOne';
// import ServicesTwo from './Components/ServicesPage/ServicesTwo';
// import Imagecarousel from './Components/Imagecarousel/Imagecarousel';
// import Test3 from './Test3';
// import Footer from './Components/Footer/Footer';
// import Footer2 from './Components/Footer2/Footer2';


// New Imports
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Services/Service';



function App() {
  return (
    <div>
      
      {/* New Imports */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="contact" element={<Contact/>} ></Route>
      <Route path="services" element={<Service/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
