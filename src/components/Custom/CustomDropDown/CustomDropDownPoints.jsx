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
       store.showPoint();
    };

    return (
            <div className="dropdown-wrap">
                <input type="text" className='textInput' ref={ inputRef } onFocus={ openDropDown } placeholder={placeholder} />
                <ul className="dropdown_destination" ref={ dropRef }>
                    { store.data.points.length !==0 ?
                        store.data.points.map((elem) => (
                        <li className='dropdown-item' onClick={
                            (e) => {
setValue(e.target.textContent);
                            setTimeout(() => props.onClickPoint(store.data.pointLocation), 400);
}
                        } key={elem.id} >{ elem[k] }</li>
                    ))
                        : <li className='dropdown-item'> Нет доступных пунктов</li>
                    }
                </ul>
            </div>
    );
};
