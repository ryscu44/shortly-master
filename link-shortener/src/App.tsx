import "./App.css";
import working from "../../images/illustration-working.svg";
import Navbar from "./components/Navbar";
import bgShorten from "../../images/bg-shorten-desktop.svg";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />

        <img
          className="working"
          src={working}
          alt="A woman working at her desk"
        />
        <div className="upper">
          <div className="upper-left">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
        <div className="middle">
          <img className="bg-shorten" src={bgShorten} alt=""></img>
          <input type="text" />
          <h3>input</h3>
        </div>
        <div className="lower">lower</div>
      </div>
    </>
  );
}

export default App;
