/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react';
import store from '../../../store';
import '../style.scss';

export const CustomDropDownPoints = (props) => {
    const { k, placeholder } = props;

    const inputRef = useRef();
    const dropRef = useRef();

    const openDropDown = () => {
        dropRef.current.style.display = 'block';
    };

    document.onmouseup = (e) => {
        if (e.target.className !== 'textInput' ) {
       dropRef.current.style.display = 'none';
};
    };

    const setValue = (value) => {
        inputRef.current.value = value;
        store.action('destination', value);
        dropRef.current.style.display = 'none';
    };

    return (
            <div className="dropdown-wrap">
                <input type="text" className='textInput' ref={ inputRef } onFocus={ openDropDown } placeholder={placeholder} />
                <ul className="dropdown" ref={ dropRef }>
                    { store.data.points ?
                        store.data.points.map((elem) => (
                        <li className='dropdown-item' onClick={ (e) => setValue(e.target.textContent) } key={elem.id} >{ elem[k] }</li>
                    ))
                        : null
                    }
                </ul>
            </div>
    );
};
