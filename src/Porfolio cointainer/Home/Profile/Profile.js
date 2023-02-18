import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className='colz'>
            <div className='colz-icon'>
              <a href="https://github.com/ardent-rishi07">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="https://github.com/ardent-rishi07">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {"  "}
              𝐇 𝐞 𝐥 𝐥 𝐨 𝐈'𝐦<span className="highligted-text"> RISHI RAJ </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "FULL STACK Dev 😀",
                    1000,
                    "MERN STACK Dev 💻",
                    1000,
                    "REACT/REACT NATIVE Dev ",
                    1000,
                    "E Dev",
                    1000,
                    "Ethusiastic Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I AM PASSIONATE ABOUT MY WORK
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="rishi.pdf" download="Rishi Raj.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
