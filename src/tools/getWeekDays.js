import React from "react";

const getDayName = (day) => {
    if (day === "Tue") {
        return ("Tuesday");
    } else if (day === "Wed") {
        return ("Wednesday");
    } else if (day === "Thu") {
        return ("Thursday");
    } else if (day === "Fri") {
        return ("Friday");
    } else if (day === "Mon") {
        return ("Monday");
    } else if (day === "Sun") {
        return ("Sunday");
    } else if (day === "Sat") {
        return ("Saturday");
    }
};


export default getDayName;