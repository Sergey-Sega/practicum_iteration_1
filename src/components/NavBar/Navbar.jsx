import React, { useState } from "react";
import "./style.scss";
import { handleContentMenuItems } from "./constants";
import { handleContentSocial } from "./constants";

export default function NavBar() {
  const [view, setView] = useState(false);
  const [eng, setEng] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <button
          className="nav-btn"
          onClick={() => setView(!view)}
        >
          <span className={`nav-btn__toggle${!view ? "" : " active"}`}>
            <span className="nav-btn__bar__wrapper">
              <span className="nav-btn__bar"/>
            </span>
          </span>
        </button>
        <button
          className={`nav-btn__lang${view ? ' active' : ''}`}
          onClick={() => setEng(!eng)}
        >
          {eng ? 'Рус' : 'Eng'}
        </button>
      </div>
      <div className={`nav-menu${view ? " active" : ""}`}>
        <nav className="nav-menu__link-list">
          {handleContentMenuItems.map(({id,name}) => (
            <a key={id} className="nav-menu__link-list__link" href="#">
              {name}
            </a>
          ))}
          <span className="nav-menu__link-list__social-block">
            {handleContentSocial.map(({id,name}) => (
              <span key={id} className={`icon icon-${name}`}/>
            ))}
          </span>
        </nav>
      </div>
    </>
  );
}
