import React from "react";
import Button from "../Ui/Button/Button";
import Modal from "../Ui/LoginModal/loginModal";
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
            <Modal>
                <p>Email</p>
                <input placeholder="Enter Your Email" />
                <p>Password</p>
                <input placeholder="Enter Your password" />
                <Button onClick={closeModalHandler}>Cancel</Button>
            </Modal>
        </div>
    );
}

export default Form;
