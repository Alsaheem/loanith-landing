import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg_footer container-fluid p-2 mt-4">
      <img
        src="./assets/loanith-logo.png"
        width={155}
        height={40}
        loading="lazy"
      />
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <ul>
            <li>Careers</li>
            <li><Link to='/waitlist'>Waitlist</Link></li>
            <li>About Us</li>
            <li>Developers</li>
            <li><Link to='/blog'>Knowledge Center</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/terms'>Terms & Conditions</Link></li>
            
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <ul>
            <li className='text_loanith font-weight-bold'>Download The App</li>
            <li className='text-w text-light'><Link to='/waitlist'> <a> Google Playstore</a> </Link></li>
            <li className='text-w'><Link to='/waitlist'>Apple App Store</Link></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <ul>
            <li className='text_loanith font-weight-bold'>Follow us</li>
            <li> <a className='text-w' href="">Linkedin</a> </li>
            <li><a className='text-w' target='_blank' href="https://www.facebook.com/myloanith">Facebook</a></li>
            <li><a className='text-w' target='_blank' href="https://www.instagram.com/myloanith">Twitter</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <form action="">
          <ul>
            <li className='text_loanith font-weight-bold'>Support</li>
            <li>
              <input type="text" className="form-control" />
            </li>
            <li>
              <input type="text" className="form-control" />
            </li>
            <li>
              <textarea
                className="form-control"
                name=""
                id=""
                cols={30}
                rows={3}
              />
            </li>
            <li><button className="bg_loanith btn mt-2">Submit</button></li>
          </ul>
          </form>
        </div>
      </div>
      <div className="bgg_footer p-2">
        <div className="d-flex justify-content-center">
          <div className="text-center">Copyright 2020 | Loanith Inc</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
