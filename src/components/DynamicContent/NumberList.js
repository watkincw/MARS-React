import React from 'react';

function NumberList(props) {
    const listItems = props.numbers;

    const numbers = listItems.map((number) =>
        <li key={number.toString()}>{number}</li>
    )
    return (
        <ul>
            {numbers}
        </ul>
    );
}

export default NumberList;