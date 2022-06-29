import React from 'react';

import '../Style.css'
function Feature({title , description , logo}) {
    return (
        <section className='feature'>
            {logo}
            <div className='flex-column m-l-20'>
                <p className='f-20'>{title}</p>
                <p className='f-grey'>{description}</p>
            </div>
        </section>
    );
}

export default Feature;