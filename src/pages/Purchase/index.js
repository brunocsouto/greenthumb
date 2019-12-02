import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <h1>Purchase</h1>
    )
};

export default Purchase;