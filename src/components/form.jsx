import React, { useState } from 'react'
import errorImg from '../assets/images/icon-error.svg';
import arrow from '../assets/images/icon-arrow.svg';

export default function header() {

    const [email, setEmail] = useState('');
    const [sms, setSms] = useState('');
    const [icon, setIcon] = useState(false);

    let inputColor  = icon ? 'hsl(0, 93%, 68%)' : '#dcc9cb';



    const hundleChange = (event) => {
        setEmail(event.target.value)
    }

    const hundleSMS = () => {
        // expressao regular
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // test para inserir mensagem de error
        if (regex.test(email)) {
            setSms('')
            setIcon(false)
        } else {
            setSms('please provide a valid email')
            setIcon(true)
        }
    }



    return (
        <div>
            <label htmlFor='email'>
            <input style={{outlineColor : inputColor }} type='text' name='email' id='email' onChange={hundleChange} value={email} placeholder='Email Address'>
            </input>
            {icon && <img src={errorImg} alt="icon-error" id='error' />}
            <span id="txt">{sms}</span>
            <button onClick={hundleSMS}> <img src={arrow} alt="icon"/> </button>
            </label>
        </div>
    )
}