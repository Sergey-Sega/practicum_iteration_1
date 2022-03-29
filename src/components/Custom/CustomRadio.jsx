import React from 'react';
import './style.scss';
export default function CustomRadio(props) {
  const {
    name,
    value,
    checked,
    description,
    action,
    onClick,
  } = props;
  return (
     <label className='radio-btn__description'
     onClick={onClick}
     >
      <input
        className='radio-btn'
        type='radio'
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={action}
      />
      <span>{description}</span>
    </label>
  );
}
