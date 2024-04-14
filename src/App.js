import "./App.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <div className="wrapper">
            <Routes>
              
            </Routes>
          </div>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
