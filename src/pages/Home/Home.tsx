import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <Layout>
        <div className=" hero_section bg_loanith">
          <div className="container pt-5">
            <div className="row pt-5">
              <div className="col-5 text-white">
                <h1>
                  There is a beter way to get funds for family and business
                  needs
                </h1>
                <br />
                <p className="lead">
                  Download the mobile from your favourite App Store to get
                  started
                </p>
                <br />

                <div className="d-flex justify-content-between">
                  <div className="">
                    <img src="./assets/googleBadge.png" loading="lazy" />
                  </div>
                  <div className="">
                    <img src="./assets/appBadge.png" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <img src="./assets/main-logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="our-solution container mt-5">
          <h2 className="text-center mb-4">OUR SOLUTION FOR YOUR NEEDS</h2>
          <div className="row">
            <div className="col-4 text-center">
              <img
                src="./assets/money-bag.png"
                loading="lazy"
                width={64}
                height={64}
              />
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus architecto saepe tempora quos dignissimos, itaque
                quaerat enim facilis fugiat maiores doloribus quidem perferendis
                dolorum delectus iure natus laudantium! A, quis?
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                src="./assets/bank-building.png"
                loading="lazy"
                width={64}
                height={64}
              />
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus architecto saepe tempora quos dignissimos, itaque
                quaerat enim facilis fugiat maiores doloribus quidem perferendis
                dolorum delectus iure natus laudantium! A, quis?
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                src="./assets/shopping-cart.png"
                loading="lazy"
                width={64}
                height={64}
              />
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus architecto saepe tempora quos dignissimos, itaque
                quaerat enim facilis fugiat maiores doloribus quidem perferendis
                dolorum delectus iure natus laudantium! A, quis?
              </p>
            </div>
          </div>
        </div>
        <div className="bg_loanith py-4 mt-4">
        <div className="wishlist text-center container mt-5 mb-5 ">
          <h5 className="font-weight-bold">Be The First To Know When We Have A Juicy Offer</h5>
          <form>
            <div className="form-row align-items-center pt-4">
              <div className="col-1"></div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-4">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Enter A Valid Email Address"
                  />
                </div>
              </div>
              <div className="col-2">
                <button type="submit" className="btn loanith_button mb-2">
                  Submit
                </button>
              </div>
              <div className="col-1"></div>
            </div>
          </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
