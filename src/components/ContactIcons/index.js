import React from 'react';
import ContactIcon from './ContactIcon'

export default function ContactIcons(params) {
    const { sun, water, toxicity } = params.data;
    
    return (<>
            <ContactIcon value={sun} />
            <ContactIcon value={water} />
            <ContactIcon value={toxicity} />
    </>)
}
 