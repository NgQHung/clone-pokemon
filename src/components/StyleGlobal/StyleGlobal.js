import React from "react";
import classes from "./StyleGlobal.module.css";

function StyleGlobal({ children }) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>{children}</div>
        </div>
    );
}

export default StyleGlobal;
