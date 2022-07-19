import React from "react";
import Button from "../Ui/Button/Button";
// import Modal from "../Ui/Card/Modal";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux/es/exports";
import { actionModalSliceActions } from "../../store/modalActions-slice";
function Form() {
    const dispatch = useDispatch();
    const closeModalHandler = (e) => {
        e.preventDefault();
        dispatch(actionModalSliceActions.closeModal());
    };
    return (
        <div className={classes.Form}>
            <div className={classes.inner}>
                <div className={classes.inputs}>
                    {/* <Modal> */}
                    <p>Email</p>
                    <input placeholder="Enter Your Email" />
                    <p>Password</p>
                    <input placeholder="Enter Your password" />
                    {/* </Modal> */}
                </div>
                <div>
                    <Button onClick={closeModalHandler}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default Form;
