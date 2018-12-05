import React from  "react";
import { Link} from "react-router-dom";
import './components/CSS/LandingPage.scss'; 

function LandingPage() {
return (
    <div className='landing-page'>
    <div className="header">
      <div className="title">
        <h1>Better Habits</h1>
      </div>
    </div>
    <div className="card">
     <p>Better Habits is a habit and mood tracking application.<br/>
     Select Explore to get started using the site <br/> or Sign In to save your progress.


     </p>
      <Link className='Link' to='/login'>Sign In</Link>
      <Link  className='Link' to='/dashboard'>Explore</Link>
    </div>
  </div>
   )
}
export default LandingPage;
