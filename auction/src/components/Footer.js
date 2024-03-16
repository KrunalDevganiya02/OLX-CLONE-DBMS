import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About OLX</h3>
          <ul>
            <li>
              <a href="#">About OLX Group</a>
            </li>
            <li>
              <a href="#">Krunal Devganiya</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OLX</h3>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Team Member Name</h3>
          <ul>
            <li>
              <a href="#">Krunal</a>
            </li>
            <li>
              <a href="#">Swati</a>
            </li>

            <li>
              <a href="#">samreen</a>
            </li>

            <li>
              <a href="#">sandya</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">krunaldevganiya02@gmail.com</a>
            </li>
          </ul>
        </div>
        {/* Add more footer sections as needed */}
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} OLX. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
