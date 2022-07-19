import React from "react";
import classes from "./Button.module.css";

function Button({ children, onClick }) {
    return (
        <div className={classes.button}>
            <button onClick={onClick}>{children}</button>
        </div>
    );
}

export default Button;
