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
                <h1>There is a beter way to get funds for family and busiess needs</h1>
                <br/>
                <p className="lead">Download the mobile from your favourite App Store to get started</p>
                <br/>

                <div className="d-flex justify-content-between">
                  <div className=""><img src="./assets/appBadge.png"  loading="lazy" /></div>
                  <div className=""><img src="./assets/googleBadge.png"  loading="lazy" /></div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <img src="./assets/main-logo.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
