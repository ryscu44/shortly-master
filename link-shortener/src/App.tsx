import "./App.css";
import working from "../../images/illustration-working.svg";
import Navbar from "./components/Navbar";
import BrandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../images/icon-fully-customizable.svg";
import logo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState<{ input: string; result: any }[]>([]);

  const url = "https://url-shortener-service.p.rapidapi.com/shorten";

  const copyClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleSubmit = async () => {
    let urlInput = input.trim(); // Remove leading/trailing spaces
    if (!urlInput.startsWith("http://") && !urlInput.startsWith("https://")) {
      urlInput = "https://" + urlInput; // Prepend "https://" if missing
    }
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "1b5e622e55msh647ddfdffcd7b5bp16c9c5jsn6baa18e57d63",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: `${urlInput}`,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const newItem = { input, result };
      setLinks([...links, newItem]);
      console.log(links);
      setInput("");
    } catch (error) {
      console.error(error);
    }
  };
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
          <div className="bg-shortendiv">
            <div className="input-container">
              <input
                name="urlInput"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Shorten a link here..."
                className="shorten-input"
                type="text"
                value={input}
              />
              <button className="shorten-btn" onClick={handleSubmit}>
                Shorten It!
              </button>
            </div>
          </div>
        </div>
        <div className="link-container">
          {links.map((link, index) => (
            <div className="link-item" key={index}>
              <h2>{link.input}</h2>
              <div className="right-links">
                <a href={link.result.result_url} target="_blank">
                  <h2 className="shortlink">{link.result.result_url}</h2>
                </a>
                <button
                  onClick={() => copyClipboard(link.result.result_url)}
                  className="copy-btn"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lower">
          <div className="advanced-stats">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="three-boxes">
            <div id="card1" className="card">
              <img className="lower-icon" src={BrandRecognitionIcon} alt="" />
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="blue-line"></div>
            <div id="card2" className="card">
              <img className="lower-icon" src={DetailedRecordsIcon} alt="" />
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="blue-line2"></div>

            <div id="card3" className="card">
              <img className="lower-icon" src={FullyCustomizableIcon} alt="" />
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="lower-get-started">
          <h1>Boost your links today</h1>
          <button className="lower-get-started-btn">Get Started</button>
        </div>
        <div className="footer">
          <img src={logo} alt="" />
          <div className="footer-links-c">
            <div className="features-c">
              <h5>Features</h5>
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className="resources-c">
              <h5>Resources</h5>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className="company-c">
              <h5>Company</h5>
              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="icons">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={pinterestIcon} alt="pinterest" />
            <img src={instagramIcon} alt="instagram" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
