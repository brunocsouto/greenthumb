import React from 'react';
import PlantComponent from './Plant';

export default function Plants({plants}) {
    return (
        <>
            {plants.map(plant => (
                <PlantComponent props={plant} key={plant.id}/>
            ))}  
        </>
    )
}
