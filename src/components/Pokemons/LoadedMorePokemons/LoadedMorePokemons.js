import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Ui/Card/Card";
import classes from "../Pokemons.module.css";

function LoadedMorePokemons() {
    const [loadedData, setLoadedData] = useState([]);
    const loadedMoreData = useSelector((state) => state.loadMore.loadedMoreData);

    return (
        <Fragment>
            {loadedMoreData.map((item) => (
                <div key={item.id} className={classes.item}>
                    <Card
                        img={item.img}
                        name={item.name}
                        number={item.id}
                        type={item.pokemonTypes}
                    />
                </div>
            ))}
        </Fragment>
    );
}

export default LoadedMorePokemons;
