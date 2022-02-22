import React from 'react';
import './style.scss';
export default function CustomInput(props) {
  const {
    id,
    name,
    type,
    placeholder,
    onChangeAction,
    onClickAction,
    list,
    defaultValue,
  } = props;
  return (
    <label className='label-for-text-input'>
      {name}
      <input
        className='textInput'
        type={type}
        required='required'
        name={name}
        placeholder={placeholder}
        onChange={onChangeAction}
        value={id}
        list={list}
        defaultValue={defaultValue}
      />
      {type === 'text' && (
        <button
          className='reset-btn'
          onClick={onClickAction}
          title='Очистить поле'
          type='reset'
        >
          &times;
        </button>
      )}
    </label>
  );
}
