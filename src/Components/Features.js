import React from 'react';
import Feature from "./Feature";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";


const features = [{
    id:1,
    title: 'Free Shipping',
    description: 'Order over $100',
    logo: <FontAwesomeIcon icon={faTruck}/>
}, {
    id:2,
    title: '30 Day Returns',
    description: 'If goods have problems',
    logo: <FontAwesomeIcon icon={faUndo}/>
}, {
    id:3,
    title: "Secure Payment",
    description: "100% secure payment",
    logo: <FontAwesomeIcon icon={faLock}/>
}, {
    id:4,
    title: "24/7 Support",
    description: "Detailed support",
    logo: <FontAwesomeIcon icon={faHeadset}/>
}
]

function Features(props) {
    return (
        <div className='features'>
            {features.map((item, index) => <Feature key={index} title={item.title} description={item.description} logo={item.logo}/>)}
        </div>
    );
}

export default Features;