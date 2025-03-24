import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import './btnCss.css'
// import { BiBorderRadius } from 'react-icons/bi';

function Buttons(props) {
    // Define the style objects
    const btnStyle1 = {
        width: '6rem',
        height:'3rem',
        borderRadius:'2rem',
        backgroundColor:'#00fecc',
        border:'none',
        boxShadow: '0 0 10px #00fecc'
     

    };
    const btnStyle2 = {
        width: '6rem',
        height:'3rem',
        borderRadius:'2rem',
        backgroundColor:'inherit',
        border:'1px solid #00fecc',
        color: 'white'
        // boxShadow: '0 0 10px #00fecc'
    };

    // Map the prop string to the actual style object
    const styles = {
        btnStyle1: btnStyle1,
        btnStyle2: btnStyle2
    };

    // Use the prop to select the style, default to btnStyle1 if invalid
    const selectedStyle = styles[props.btnStyle] || btnStyle1;

    return (
        <>
            <button className='btnHover' style={selectedStyle}>{props.btn}</button>
        </>
    );
}

export default Buttons;