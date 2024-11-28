import React, { useState } from "react";
import NameInput from './NameInput';
import SurnameInput from './SurnameInput';

function FullNameApp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div>
            <NameInput firstName={firstName} onFirstNameChange={handleFirstNameChange} />
            <SurnameInput lastName={lastName} onLastNameChange={handleLastNameChange} />

            <h2>Полное имя: {firstName} {lastName}</h2>
        </div>
    );
}

export default FullNameApp;