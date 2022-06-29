import React from 'react';
import Button from "./Button";

function EmailAddressComponent() {
    return (
        <div className='email-component'>
            <input type='text' placeholder='email address'/>
            <Button>Submit</Button>
        </div>
    );
}

export default EmailAddressComponent;