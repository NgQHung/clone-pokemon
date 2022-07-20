import React from "react";
import classes from "./Card.module.css";

function Card({ children }) {
    return (
        <div className={classes.Card}>
            <div className={classes.CardInner}>{children}</div>
        </div>
    );
}

export default Card;
