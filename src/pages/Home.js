import { useNavigate } from "react-router-dom";
import '../css/Home.css'
export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <nav>
                   <a className="header-name">Resetin</a>
                </nav>
            </header>

            <div>
               <div className="lightspot-line"></div>
               <div className="lightspot"></div>
            </div>
        </div>
    )
}