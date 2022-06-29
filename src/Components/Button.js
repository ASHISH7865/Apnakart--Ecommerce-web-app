import React from 'react';

function Button(props) {
    return (
            <button className={`${props.className} button`} onClick={props.onClick} >{props.children}</button>
    );
}

export default Button;