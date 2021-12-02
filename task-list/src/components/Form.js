import React from "react";

function handleSubmit (e) {
    e.preventDefault();
    alert('Your task are added to the list.');
}

function Form (props) {
    return (
        <from onClick = {handleSubmit}>
            <h2>
                Type your task here!
            </h2>
        <input type="text" />
        <button type="submit">
            Done!
        </button>
        </from>
    );
}

export default Form;
