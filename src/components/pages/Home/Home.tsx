import React, { useState } from "react";
import "./Home.css";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false)
  };


  return (
    <div className="">
      <div className=" hero_section bg_loanith">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-5 text-w">
              <h1 className="text-w">
                No matter your circle, Loanith got you covered.
              </h1>
              <br />
              <p className="lead">
                Download our App from your favourite App Store to access our
                credit Facilities on Demand.
              </p>
              <br />

              <div className="d-flex justify-content-between">
                <div className="" onClick={showModal}>
                  <img
                    className="btn_action"
                    src="./assets/googleBadge.png"
                    loading="lazy"
                  />
                </div>
                <div className="" onClick={showModal}>
                  <img
                    className="btn_action"
                    src="./assets/appBadge.png"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 main_img">
              <img src="./assets/main-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Modal
          title="Welcome"
          visible={visible}
          footer={null}
          onCancel={handleCancel}
        >
          <p>Our Application is still Under Development</p>
          <p>Join our waitlist in order to get exclusive access when we go live</p>
          <p>Click below to join the waitlist</p>
          <Link to='/waitlist'><button className="btn bg_loanith">Join waitlist</button></Link>
        </Modal>
      </div>
      <div className="our-solution container mt-5">
        <h2 className="text-center mb-4">OUR SOLUTION FOR YOUR NEEDS</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="./assets/bank-building.png"
              loading="lazy"
              width={64}
              height={64}
            />
            <h4>Cash Advance</h4>
            <p className="pt-4">
              Transfer funds to your bank account for your personal use online
              and offline.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="./assets/money-bag.png"
              loading="lazy"
              width={64}
              height={64}
            />
            <h4>Balance Transfer</h4>
            <p className="pt-4">
              Owing someone? It shouldn't be embarrassing. Pay them off now
              using credit from Loanith.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="./assets/shopping-cart.png"
              loading="lazy"
              width={64}
              height={64}
            />
            <h4>Pay Bills</h4>
            <p className="pt-4">
              Finished your Airtime, Data, Electricity, and Cable TV
              subscription, Loanith ensures you stay connected.
            </p>
          </div>
        </div>
      </div>
      <div className="bg_loanith py-4 mt-4">
        <div className="wishlist text-center container mt-5 mb-5 ">
          <h5 className="font-weight-bold">
            Be The First To Know When We Have A Juicy Offer
          </h5>
          <form>
            <div className="form-row align-items-center pt-4">
              <div className="col-1"></div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-md-4">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Enter A Valid Email Address"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn loanith_button mb-2">
                  Submit
                </button>
              </div>
              <div className="col-1"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white mt-5 how_it_works">
        <div className="container">
          <h5 className="text-center mb-4 font-weight-bold">How It Works</h5>
          <div className="row mb-5">
            <div className="col-6">
              <img className="img-fluid" src="./assets/mobile_app.svg" alt="" />
            </div>
            <div className="col-1 hidden"></div>
            <div className="col-5 center">
              Download Loanith or Loanith Lender App from your favourite app
              store
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-5 center">
              Sign up and complete your borrower and/or lending Profile using
              the App
            </div>
            <div className="col-1 hidden"></div>

            <div className="col-6">
              <img className="img-fluid" src="./assets/profile_details.svg" alt="" />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6">
              <img className="img-fluid" src="./assets/wallet.png" alt="" />
            </div>
            <div className="col-1 hidden"></div>

            <div className="col-5 center">
              Get funds on demand or subscribe to an investment offer.
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="blog mt-4">
        <div className="container">
          <div className="d-flex justify-content-center mb-2">
            <hr className="liner"></hr>
            <div className="font-weight-bold">
              {" "}
              <h5 className="text-center">Knowledge Center</h5>
            </div>
            <hr className="liner"></hr>
          </div>
          <br className="breaker"></br>
          <div className="card-deck">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="card-img-top img-fluid"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Saving The Right Way ?</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>

                <button className="btn bg-loanith">Read More</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="card-img-top img-fluid"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">What is Credit Score ?</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>

                <button className="btn bg-loanith">Read More</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                className="card-img-top img-fluid"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">5 Tips Why You Should Invest ?</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <button className="btn bg-loanith">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
