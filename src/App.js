import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experiance from "./component/experince/Experiance";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Education from "./education/Education";
import Internship from "./intership/Internship";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experiance />
      <Internship />
      <Portfolio />

      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
