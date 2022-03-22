import React, { useState } from 'react';
import DisplayData from './DisplayData';


function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [hobbies, setHobbies] = useState([]);
    
    let hobbiesArr = [];
    const submitBtn = () => {
        setFirstName(document.getElementById('firstName').value);
        setLastName(document.getElementById('lastName').value);
        setAge(document.getElementById('age').value);
        setAddress(document.getElementById('address').value);

        const options = Array.from(document.getElementById('hobbies').options).filter((option) => {
            return (option.selected)
        });

        for (let option of options) {
            hobbiesArr.push(option.innerText);
        };

        setHobbies(hobbies.concat(hobbiesArr));

        document.getElementById('DispInputs').style.display = 'block';
    }

    return (
        <div>
            <h1>Enter Info</h1>
            <div className='Gridcontainer'>
                <b className='Labelstyle'>First Name: </b>
                <input className='fields' type='name' id='firstName' />
                <br />

                <b className='Labelstyle'>Last Name: </b>
                <input className='fields' type='name' id='lastName' />
                <br />
                
                <b className='Labelstyle'>Age: </b>
                <input className='fields' type='number' id='age' />
                <br />

                <b className='Labelstyle'>Address: </b>
                <input className='fields' type='address' id='address' />
                <br />

                <b className='Labelstyle'>hobbies: </b>
                <select id='hobbies' multiple>
                    <option className='fields' key='movies'>Movies</option>
                    <option className='fields' key='reading'>Reading</option>
                    <option className='fields' key='music'>Music</option>
                    <option className='fields' key='travel'>Travel</option>
                </select>

                <br />
                <br />

                <button className='buttonstyle' onClick={submitBtn}>Submit</button>

                <div id='DispInputs' className='SubmissionText' style={{backgroundColor: 'lightblue', display: 'none'}} >
                    <DisplayData
                        firstName={firstName}
                        lastName={lastName}
                        age={age}
                        address={address}
                        hobbies={hobbies}
                    />
                </div>
            </div>
        </div>
    );
}

export default Form;