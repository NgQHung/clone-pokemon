import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Ui/Card/Card";
import classes from "./LoadedMorePokemons";

function LoadedMorePokemons() {
    const [loadedData, setLoadedData] = useState([]);
    const loadedMoreData = useSelector((state) => state.loadMore.loadedMoreData);

    return (
        <div>
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
        </div>
    );
}

export default LoadedMorePokemons;
