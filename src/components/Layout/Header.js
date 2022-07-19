import React, { Fragment, useState } from "react";
import Button from "../Ui/Button/Button";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux/es/exports";
import { actionModalSliceActions } from "../../store/modalActions-slice";

// import { CSSTransition } from "react-transition-group";

function Header() {
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();

        dispatch(actionModalSliceActions.openModal());
    };
    const signUpHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Fragment>
            <div className={classes.Header}>
                <div className={classes.HeaderActions}>
                    <Button onClick={loginHandler}>Login</Button>
                    <Button onClick={signUpHandler}>Sign up</Button>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
