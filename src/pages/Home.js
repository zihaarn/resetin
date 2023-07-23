import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import { ReactComponent as ArrowIcon } from '../icons/arrow-right-long-solid.svg';
import { ReactComponent as MainIcon } from '../icons/resetin_w.logo.svg';

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

            <button className="get-started-btn" onClick={() => navigate('waitlist')}>
                <span className="get-started-btn-text">Get Started</span>
                <ArrowIcon className="get-started-btn-icon" />
            </button>

            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>
        </div>
    )
}