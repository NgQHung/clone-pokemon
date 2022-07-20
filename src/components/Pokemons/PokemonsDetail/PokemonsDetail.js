import React from "react";
import Card from "../../Ui/Card/Card";
import CardDetail from "../../Ui/CardDetail/CardDetail";
import classes from "./PokemonsDetail.module.css";

function PokemonsDetail(props) {
    return (
        <CardDetail>
            <div className={classes.Card}>
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
                </div>
            </div>
        </CardDetail>
    );
}

export default PokemonsDetail;
