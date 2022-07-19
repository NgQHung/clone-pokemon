import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop}>{props.children}</div>;
};

const ModalOverLay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const portalElementOverlays = document.getElementById("overlays");
const portalElementBackdrop = document.getElementById("backdrop");

function LoginModal({ children }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverLay>{children}</ModalOverLay>, portalElementBackdrop)}
            {ReactDOM.createPortal(<Backdrop />, portalElementOverlays)}
        </Fragment>
    );
}

export default LoginModal;
