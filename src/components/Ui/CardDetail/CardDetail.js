import React from "react";
import classes from "./CardDetail.module.css";

function CardDetail({ children }) {
    return <div className={classes.CardDetail}>{children}</div>;
}

export default CardDetail;
