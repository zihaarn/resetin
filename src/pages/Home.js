import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import { ReactComponent as ArrowIcon } from '../icons/arrow-right-long-solid.svg';
import { ReactComponent as MainIcon } from '../icons/resetin_w.logo.svg';
import { ReactComponent as OrderIcon} from '../icons/order.svg';
import { ReactComponent as TeamIcon } from '../icons/team.svg';
import mainlogo from '../icons/resetin_b.logo.svg';
import codingtasks from '../photos/codingtasks.png';
import collaborate from '../photos/collaborate.png';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="coming-soon-div">
                <p>
                    Coming soon
                </p>
            </div>

            {/*Header*/}
            <header>
                <nav>
                   <div className="header-container">
                       <MainIcon className="header-main-logo"/>
                       <a className="header-name">Resetin</a>
                   </div>
                </nav>
            </header>

            {/*Heading*/}
            <p className="starting-title">
               Streamline Your Coding Productivity Today!
            </p>
            
            {/*Subtitile*/}
            <p className="starting-subtitle">
               Unveil the possibilities with our Resetin developer platform! 
               Seamlessly organize projects, collaborate within groups, and focus on building remarkable projects together. 
               Simplifying your development journey is our mission!
            </p>
            
            {/*Get started button*/}
            <button className="get-started-btn" onClick={() => navigate('waitlist')}>
                <span className="get-started-btn-text">Join Waitlist</span>
                <ArrowIcon className="get-started-btn-icon" />
            </button>

            {/*Lightspot break*/}
            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>

            {/*Coding tasks phone*/}
            <div className="codingtasks-text">
                <h3>
                   <OrderIcon className="order-icon" />
                    Order
                </h3>
                <p>
                    Coding tasks
                </p>
                <h4>
                Organize your coding tasks and enhance projects with our custom emojis!
                </h4>
            </div>
              <div className="codingtasks-cont">
              <img className="codingtasksphone" src={codingtasks} alt="collaborate"/>
            </div>
            <div className="separate-line"></div>

            {/*Collaborate phone*/}
            <div className="collaborate-text">
                <h3>
                   <TeamIcon className="team-icon" />
                    Collaborate
                </h3>
                <p>
                    Developer Teams
                </p>
                <h4>
                    Efficiently manage meetings and streamline team tasks, all in a unified platform!
                </h4>
            </div>
              <div className="collaborate-cont">
              <img className="collaboratephone" src={collaborate} alt="codingtasks"/>
            </div>
            <div className="separate-line"></div>

            {/*Summary logo*/}
            <div className="summary-main-logo-cont">
              <img className="summary-main-logo" src={mainlogo} alt="mainlogo"/>
            </div>

            {/*summary introduction*/}
            <div className="summary-intro-cont">
                <p>
                    A vital tool for your developers team.
                </p>
                <h4>
                    Leave behind the complexities of traditional workflows and embrace a user-friendly tool that elevates your coding projects' organization and boosts productivity.
                </h4>
            </div>

            {/*Get strted button 2nd*/}
            <button className="get-started-btn" onClick={() => navigate('waitlist')}>
                <span className="get-started-btn-text">Join Waitlist</span>
                <ArrowIcon className="get-started-btn-icon" />
            </button>

            {/*Lightspot break*/}
            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>

            {/*Footer*/}
            <section className="footer-cont">
                <div className="legal-div">
                    <p>Legal</p>
                    <div className="legal-links">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Services</a>
                    </div>
                </div>

                <div className="Company-div">
                    <p>Company</p>
                    <div className="Company-links">
                    <a href="">Contact</a>
                    <a href="">About</a>
                    </div>
                </div>

                <div className="Guides-div">
                    <p>Guides</p>
                    <div className="Guides-links">
                    <a href="">Discord</a>
                    <a href="">FAQ</a>
                    </div>
                </div>
                <p className="rights-reserved">
                © 2023 Resetin. All rights reserved.
                </p>
            </section>
        </div>
    )
}