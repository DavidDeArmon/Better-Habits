import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Dashboard.scss";
import DavidsIconWhite from '../../../public/assets/DavidsIconWhite.svg'

class Header extends React.Component {  
  render() {
    return (
        <div className="dashboardHeader">
          <img id='icon' src={DavidsIconWhite}/>
          <Link className="Link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="Link" to="/moods">
            Moods
          </Link>
          <Link className="Link" to="/habits">
            Habits
          </Link>
        </div>
    
    );
  }
}
export default Header