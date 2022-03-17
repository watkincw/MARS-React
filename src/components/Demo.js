import React, { useState } from 'react';
import styles from './myStyle.module.css';
// import './style.css';

function Demo() {
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: '1975',
        color: 'Red'
    });
    return (
        <div>
            <h1 className={styles.demo1}>My favorite car is {car.brand}, {car.model}</h1>
            <p>My car color: {car.color}</p>
            <button onClick={() => setCar({...car, color: 'Blue'})}>Change Color</button>
        </div>
    );
}

export default Demo;
