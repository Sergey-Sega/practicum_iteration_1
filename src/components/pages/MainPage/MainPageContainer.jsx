import React from "react";
import Slider from "../../Slider/Slider";
import Header from "../../Header/Header";
import "./MainPage.scss";
import MainPageBlockInfo from "./MainPageBlockInfo";
import MainPageFooter from "./MainPageFooter";
export default function MainPageContainer() {
  return (
    <div className="main-page">
      <div className="main-page__content">
          <Header />
        <MainPageBlockInfo /> 
        <MainPageFooter />
      </div>
       <Slider />
    </div>
  );
}