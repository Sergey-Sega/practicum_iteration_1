import React from 'react';
import './style.scss';
export default function Button({ title, type, action, disable }) {
  return (
    <button type='button'
    className={'button ' + type}
    onClick ={action}
    disabled={disable}
    >
      {title}
    </button>
  );
}
