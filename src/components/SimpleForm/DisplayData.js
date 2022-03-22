import React from 'react';

function DisplayData(props) {
    return (
        <div>
            <h1>Success!!!</h1>
            <h3>First Name: </h3> <b>{props.firstName}</b>
            <h3>Last Name: </h3> <b>{props.lastName}</b>
            <h3>Age: </h3> <b>{props.age}</b>
            <h3>Address: </h3> <b>{props.address}</b>
            <h3>Hobbies: </h3>
            <ul>
                {props.hobbies.map((value) => {
                    return <b><li key={value}>{value}</li></b>
                })}
            </ul>
        </div>
    );
}

export default DisplayData;