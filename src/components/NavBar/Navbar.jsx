import React, { useState } from 'react';
import NavBtn from './NavBtn';
import './NavBar.scss';
export default function NavBar() {
  const [view, setView] = useState(false);
  const [eng, setEng] = useState(false);
  return (
      <div className='nav-bar'>
        <NavBtn active={view} action={() => setView(!view)} />
        <button
          className={'nav-btn__lang' + (view ? ' active' : '')}
          onClick={() => setEng(!eng)}
        >
          {eng ? 'Рус' : 'Eng'}
        </button>
      </div>
  );
}