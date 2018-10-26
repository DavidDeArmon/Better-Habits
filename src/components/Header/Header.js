import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Dashboard.scss";

class Header extends React.Component {  
  render() {
    return (
        <div className="dashboardHeader">
          <img id='icon' src='DavidsIconWhite.svg'/>
          <Link className="Link" to="/">
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