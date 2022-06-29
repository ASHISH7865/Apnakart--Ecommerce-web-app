import React from 'react';

function NavigationText(props) {
    return (
        <div className='navigation-text-wrapper'>
        <a href='#' className='navigation-text'>{props.nText}</a>

        </div>
    );
}

export default NavigationText;