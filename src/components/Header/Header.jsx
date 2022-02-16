import React from "react";
import geoIcon from "../../UI/Geo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="header__site-name" to="/need-for-drive">
          Need for drive
        </Link>
        <span className="header__geolocation">
          <img
            className="header__geolocation__icon"
            src={geoIcon}
            alt="GeoLocation"
          />
          <p>Ульяновск</p>
        </span>
      </header>
    );
  }
}