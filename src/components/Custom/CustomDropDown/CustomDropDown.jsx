/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useRef } from 'react';
import store from '../../../store';
import '../style.scss';

export const CustomDropDownCities = (props) => {
    const { k, options, placeholder } = props;

    const [Data, setData] = useState(null);

    useEffect(() => {
        if (options.length && Data === null) {
setData(options);
}
    });


    const inputRef = useRef();
    const dropRef = useRef();

    const openDropDown = () => {
        dropRef.current.style.display = 'block';
    };

    document.onmouseup = (e) => {
        if (e.target.className != 'textInput__dropdown') {
dropRef.current.style.display = 'none';
};
    };


const setValue = (value) => {
        inputRef.current.value = value;
        store.filterPoints(value);
        dropRef.current.style.display = 'none';
    };

    const filterData = () => {
        const result = props.options.filter((elem) => elem[k].toLowerCase().includes(inputRef.current.value.toLowerCase()));

        setData(result);
    };


    return (
    <div className="dropdown-wrap">
                <input id='asd' type="text" className='textInput__dropdown' ref={ inputRef } onFocus={ openDropDown } onChange={ filterData } placeholder={placeholder} />
                <ul className="dropdown" ref={ dropRef }>
                    { Data ?
                        Data.map((elem) => (
                        <li className='dropdown-item' onClick={ (e) => setValue(e.target.textContent) } key={elem.id} >{ elem[k] }</li>
                    ))
                        : null
                    }
                </ul>
            </div>
    );
};
