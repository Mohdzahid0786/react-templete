import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Service from './Component/Service';
import About from './Component/About';
import Reservation from './Component/Reservation';
import Team from './Component/Team';
import Menu from './Component/Menu';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Service />
      <About />
      <Menu/>
      <Reservation/>
      <Team/>
      <Testimonial/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
