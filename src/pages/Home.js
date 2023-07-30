import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import { ReactComponent as ArrowIcon } from '../icons/arrow-right-long-solid.svg';
import { ReactComponent as MainIcon } from '../icons/resetin_w.logo.svg';
import mainlogo from '../icons/resetin_b.logo.svg';
import codingtasks from '../photos/codingtasks.png';

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <nav>
                   <div className="header-container">
                       <MainIcon className="header-main-logo"/>
                       <a className="header-name">Resetin</a>
                   </div>
                </nav>
            </header>

            <p className="starting-heading">
               Streamline Your Coding Productivity Today with Us!
            </p>

            <p className="starting-intro">
                Elevate your life and productivity. 
                Cultivate positive habits with our comprehensive platform,
                empowering routines for fulfillment.
            </p>

            <button className="get-started-btn" onClick={() => navigate('waitlist')}>
                <span className="get-started-btn-text">Get Started</span>
                <ArrowIcon className="get-started-btn-icon" />
            </button>

            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>

            <div className="codingtasks-text">
                <h3>
                    Catalog
                </h3>
                <p>
                    Coding tasks
                </p>
                <h4>
                    Organize your daily coding tasks and projects, use our custom emojis to make it even more appealing.
                </h4>
            </div>
            <div className="codingtasks-cont">
            <img className="codingtasksphone" src={codingtasks} alt="codingtasks"/>
            </div>
            <div className="separate-line"></div>

            <div className="summary-main-logo-cont">
            <img className="summary-main-logo" src={mainlogo} alt="mainlogo"/>
            </div>

            <div className="summary-intro-cont">
                <p>
                    A vital tool for your developers team.
                </p>
                <h4>
                    Say goodbye to your crawling channels, and say hello to a user-friendly tool that helps you to organize your coding projects and be more productive.
                </h4>
            </div>

            <button className="get-started-btn" onClick={() => navigate('waitlist')}>
                <span className="get-started-btn-text">Get Started</span>
                <ArrowIcon className="get-started-btn-icon" />
            </button>

            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>

            <section className="footer-cont">
                <div className="legal-div">
                    <p>Legal</p>
                    <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Services</a>
                    </div>
                </div>

                <div className="Company-div">
                    <p>Company</p>
                    <div className="Company-links">
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    </div>
                </div>

                <div className="Guides-div">
                    <p>Guides</p>
                    <div className="Guides-links">
                    <a href="#">Discord</a>
                    <a href="#">FAQ</a>
                    </div>
                </div>
                <p className="rights-reserved">
                © 2023 Resetin. All rights reserved.
                </p>
            </section>
        </div>
    )
}