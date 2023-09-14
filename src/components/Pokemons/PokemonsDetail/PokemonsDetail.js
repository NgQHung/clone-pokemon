import React from 'react';
import {useSelector} from 'react-redux';
import CardDetail from '../../Ui/CardDetail/CardDetail';
import classes from './PokemonsDetail.module.css';

export const PokemonsDetailEmpty = () => {
    return (
        <CardDetail>
            <div className={classes.Card}>
                <div className={classes.Img}>
                    <img src="./no-pokemon-selected-image.png" alt="no pokemon" />
                </div>
                <div>
                    <p>Select a Pokemon to display here.</p>
                </div>
            </div>
        </CardDetail>
    );
};

function PokemonsDetail(props) {
    const getDetail = useSelector((state) => state.showDetailSlice.dataClicked);
    return (
        <CardDetail>
            {getDetail.map((item) => (
                <div key={props.number} className={classes.Card}>
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
