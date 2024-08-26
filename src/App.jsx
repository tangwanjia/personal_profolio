import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Portf from "./components/Portf/Portf";
import Serv from "./components/Serv/Serv";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Serv />
      <Portf />
      <Contact />
    </>
  );
}

export default App;
