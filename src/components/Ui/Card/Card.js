import React from 'react';
import {useDispatch} from 'react-redux';
import classes from './Card.module.css';
import {showDetailActions} from '../../../store/showDetail-slice';
import './Tag.css';

function Card(props) {
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(showDetailActions.show(props.number));
    };
    return (
        <div className={classes.Card} onClick={clickHandler}>
            <div className={classes.CardInner}>
                <div className={classes.Img}>
                    <img src={props.img} alt="pic" />
                </div>
                <div className={classes.Number}>
                    <p>N°{props.number}</p>
                </div>
                <div className={classes.Name}>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.Type}>
                    {props.type?.map((type, i) => (
                        <span key={i} className={type}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
