import React, { useState } from "react";
import './AgeCalculator.css'

function AgeCalculator() {

    const [birth, setBirth] = useState('')
    const [showAge, setShowAge] = useState(null)

    const calculate = () => {

        if (!birth) {
            alert("Please select your date of birth.")
        }

        const findBirth = new Date(birth)
        const currentDate = new Date()

        let findYear = currentDate.getFullYear() - findBirth.getFullYear()
        let findMonth = currentDate.getMonth() - findBirth.getMonth();
        console.log(findMonth);
        
        if (findYear < 0) {
            alert('Please enter a valid date of birth.')
        } else {
            setShowAge(findYear)
        }
    }

    return (
        <div className="age-container">
            <div id="result">
                {showAge === null
                    ? <p className="ageShow">😊Thank you for visiting! Please check your age here. 🎉</p>
                    : <p className="ageShow">Your Age is: {showAge} years 🎉</p>}
            </div>

            <div>
                <input type='date' id='inputBox' value={birth}
                    onChange={(e) => setBirth(e.target.value)} />
            </div>
            <button id="btn" onClick={calculate}>Calculate</button>
        </div>
    )
}

export default AgeCalculator