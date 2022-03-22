import React, { useState } from 'react';

// const values = [...e.target.selectedOptions].map(opt => opt.value);
// setHobbies(values);

function Form() {
    let movies = document.getElementById('MoviesID');
    let reading = document.getElementById('ReadingID');
    let music = document.getElementById('MusicID');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [hobbies, setHobbies] = useState([]);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    let hobbiesArr = [];
    const handleHobbiesChange1 = (e) => {
        if (movies.checked) {
            hobbiesArr.push(e.target.value);
        } else if (!movies.checked) {
            hobbiesArr = [...hobbiesArr];
        }
        console.log(hobbiesArr);
        setHobbies(hobbiesArr);
    }
    const handleHobbiesChange2 = (e) => {
        if (reading.checked) {
            hobbiesArr.push(e.target.value);
        } else if (!reading.checked) {
            hobbiesArr = [];
        }
        console.log(hobbiesArr);
        setHobbies(hobbiesArr);
    }
    const handleHobbiesChange3 = (e) => {
        if (music.checked) {
            hobbiesArr.push(e.target.value);
        } else if (!music.checked) {
            hobbiesArr = [];
        }
        console.log(hobbiesArr);
        setHobbies(hobbiesArr);
    }

    return (
        <div>
            <form>
                <div>
                    <h3>First Name: </h3>
                    <input
                        onChange={handleFirstNameChange}
                        value={firstName}
                        placeholder='First Name'
                    />
                </div>
                <div>
                    <h3>Last Name: </h3>
                    <input
                        onChange={handleLastNameChange}
                        value={lastName}
                        placeholder='Last Name'
                    />
                </div>
                <div>
                    <h3>Age: </h3>
                    <input
                        type='number'
                        onChange={handleAgeChange}
                        value={age}
                        placeholder='Age'
                    />
                </div>
                <div>
                    <h3>Address: </h3>
                    <input
                        type='address'
                        onChange={handleAddressChange}
                        value={address}
                        placeholder='Address'
                    />
                </div>
                <div>
                    <h3>Hobbies: </h3>
                    <input
                        type='checkbox'
                        value='Movies'
                        id='MoviesID'
                        onChange={handleHobbiesChange1}
                        /><span>Movies</span>
                    <input
                        type='checkbox'
                        value='Reading'
                        id='ReadingID'
                        onChange={handleHobbiesChange2}
                        /><span>Reading</span>
                    <input
                        type='checkbox'
                        value='Music'
                        id='MusicID'
                        onChange={handleHobbiesChange3}
                    /><span>Music</span>
                </div>
                <br/>
            </form>
            <h3>Hobbies: {hobbies}</h3>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Age: {age}</h3>
            <h3>Address: {address}</h3>
        </div>
    );
}

export default Form;