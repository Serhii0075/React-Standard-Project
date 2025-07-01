import React from "react";
import BingoSVG from "/svg/mainBngo.svg";
import buttonBorderSvg from "/svg/buttonBorder.svg";
import telegramSVG from "/svg/telegramIcon.svg";
import twitterSVG from "/svg/twitterIcon.svg";

import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <span className="press_font">TRUST NO ONE BUT THE CODE</span>
      </div>
      <div className="no_description">
        <div className="description">
          <div className="description_item">
            <img src="/svg/dot.svg" width={30} height={28} alt="" />
            <span className="press_font">NO ADMIN</span>
          </div>
          <div className="description_item">
            <img src="/svg/dot.svg" width={30} height={28} alt="" />
            <span className="press_font">NO RATS</span>
          </div>
        </div>
        <div className="description_another">
          <div className="description_item">
            <img src="/svg/dot.svg" width={30} height={28} alt="" />
            <span className="press_font">NO RUG</span>
          </div>
        </div>
      </div>
      <div className="main_bingo">
        <img src={BingoSVG} alt="" />
      </div>
      <div className="dashboard_buttons">
        <div className="button_item">
          <img
            className="button_border"
            src={buttonBorderSvg}
            alt="button border"
          />
          <span className="button_press_font">Start</span>
        </div>
        <div className="button_item">
          <img
            className="button_border"
            src={buttonBorderSvg}
            alt="button border"
          />
          <span className="button_press_font">Whitepaper</span>
        </div>
      </div>
      <div className="social_buttons">
        <img src={telegramSVG} alt="" />
        <img src={twitterSVG} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
