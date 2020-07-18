import React from "react";
import "./Footer.css";
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
        <div className="col-3">
          <ul>
            <li>Careers</li>
            <li>About Us</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li className='text_loanith font-weight-bold'>Download The App</li>
            <li>Google Playstore</li>
            <li>Apple AppleStore</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li className='text_loanith font-weight-bold'>Follow us</li>
            <li>linkdin</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="col-3">
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
