import React from 'react';
import geoIcon from '../../assets/Geo.svg';
import './style.scss';
import { Link } from 'react-router-dom';
export default function Header({classNames}) {
  return (
      <header className={'header ' + classNames}>
        <Link className='header__site-name' to='/practicum_iteration_1'>
          Need for drive
        </Link>
        <span className='header__geolocation'>
          <img
            className='header__geolocation__icon'
            src={geoIcon}
            alt='GeoLocation'
          />
          <p>Ульяновск</p>
        </span>
      </header>
    );
  }
