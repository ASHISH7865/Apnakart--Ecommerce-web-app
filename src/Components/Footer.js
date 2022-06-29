import React from 'react';
import SignUpCTA from "./SignUpCTA";
import EmailAddressComponent from "./EmailAddressComponent";
import HeaderButton from "./HeaderButton";
import NavigationText from "./NavigationText";
import Socials from "./Socials";
import Button from "./Button";

const footerText = [
    {nText: 'About'},
    {nText: 'Contact'},
    {nText: 'Terms'},
    {nText: 'Privacy'},
    {nText: 'Cookies'},
    {nText: 'Advertising'},
    {nText: 'Business'},
    {nText: 'Developers'},
    {nText: 'Careers'},
    {nText: 'More'},
]

function Footer(props) {
    return (

        <footer className='footer'>
            <div className="upper">

                <div className="left">
                    <Button className='secondary'>Sign Up</Button>
                    <EmailAddressComponent/>
                </div>
                <div className="right">
                    {footerText.map((text, index) => <NavigationText nText={text.nText} key={index}/>)}
                </div>
            </div>
            <Socials/>
        </footer>
    );
}

export default Footer;