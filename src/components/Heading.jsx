import React from "react";

function Heading() {
    const time = new Date().getHours();

    let customStyle = {};

    let salutation;

    if (time < 12) {
        salutation = "Morning";
        customStyle.color = "red";
    } else if (time > 12 && time < 18) {
        salutation = "Afternoon";
        customStyle.color = "green";
    } else if (time > 18 && time < 24) {
        salutation = "Evening";
        customStyle.color = "blue";
    }

    return <h1 style={customStyle}>Good {salutation}!</h1>;
}

export default Heading;