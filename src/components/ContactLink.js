import './ContactLink.css'
import React from 'react';

const ContactLink = ({ text }) => {
    const whatsAppLink = `whatsapp://send?phone=+5511979637132`

    return (
        <div className='contact-link-container'>
            <div >
                <a
                    className='contact-link'
                    href={whatsAppLink}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            </div>
        </div>
    );
};

export default ContactLink;
