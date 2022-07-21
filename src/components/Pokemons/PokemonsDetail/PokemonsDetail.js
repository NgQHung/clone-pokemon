import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Ui/Card/Card";
import CardDetail from "../../Ui/CardDetail/CardDetail";
import classes from "./PokemonsDetail.module.css";

function PokemonsDetail(props) {
    const getDetail = useSelector((state) => state.showDetailSlice.dataClicked);
    console.log(getDetail);
    return (
        <CardDetail>
            {getDetail.map((item) => (
                <div className={classes.Card}>
                    <div className={classes.CardInner}>
                        <div className={classes.Img}>
                            <img src={item.img} alt="pic" />
                        </div>
                        <div className={classes.Number}>
                            <p>N°{item.number}</p>
                        </div>
                        <div className={classes.Name}>
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </CardDetail>
    );
}

export default PokemonsDetail;
