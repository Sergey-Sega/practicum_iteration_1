import React from 'react';
import './NavBtn.scss';
export default function NavBtn({action, active}) {
  return (
    <button className="nav-btn" onClick={action}>
      <span className={'nav-btn__toggle' + (!active ? '' : ' active')}>
        <span className="nav-btn__bar__wrapper">
          <span className="nav-btn__bar"></span>
        </span>
      </span>
    </button>
  );
}