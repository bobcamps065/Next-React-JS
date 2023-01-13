import React from "react";

export default function Time() {
    return(
        <p className="text-center text-warning fs-2">
            {new Date().toLocaleTimeString()}
        </p>
    )
}