import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Serv from "./components/Serv/Serv";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Serv />
      <Portfolio />
    </>
  );
}

export default App;
