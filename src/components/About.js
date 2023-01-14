import React from 'react'
import './About.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Link from '@material-ui/core/Link'

function About() {
  return (
    <div className='about-container'>
        <div className="about-content">
            <h2 className='abth'>About Us</h2>
            <p>Cinema club organizes screening of latest movies at <br /> <span>Convocation Hall,</span>with a size of around 1800 seats with the <br /> best projector in the city.These Screenings (which are free <br /> of cost,by the way) are met with much fanfare in a Convo <br /> bottled down to its full capacity.</p>
            <div className="contact-btns">
                <FacebookRoundedIcon/>
                <InstagramIcon>
                  <a href="https://www.instagram.com/cinema_club_iitr/" target="_blank" rel="noopener noreferrer"></a>
                </InstagramIcon>
                
                  
            </div>
        </div>
        <div className="teamimg">
          <div  id='aboutimg'></div>
        </div>
      
    </div>
  )
}

export default About
