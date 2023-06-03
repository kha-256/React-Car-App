import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles.css';

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="content">
          <div className="social-icons">
            <a href="#"><FacebookIcon className="socialIcons" /></a>
            <a href="#"><InstagramIcon className="socialIcons" /></a>
            <a href="#"><TwitterIcon className="socialIcons" /></a>
          </div>
          <p>&copy; 2023 Random Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
