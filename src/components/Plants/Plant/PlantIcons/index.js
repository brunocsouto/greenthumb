import React from 'react';
import PlantIcon from './PlantIcon'

export default function ContactIcons(params) {
    const { sun, water, toxicity } = params.data;
    
    return (<>
            <PlantIcon value={water} />
            <PlantIcon value={sun} />
            <PlantIcon value={toxicity} />
    </>)
}
