import React, { useEffect, useState } from "react";
import classes from "./Pokemons.module.css";
import Card from "../Ui/Card/Card";
import PokemonsDetail from "./PokemonsDetail/PokemonsDetail";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { showDetailActions } from "../../store/showDetail-slice";

function Pokemons() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const getDetail = useSelector((state) => state.showDetailSlice.data);
    console.log(getDetail);
    const showDetail = useSelector((state) => state.showDetailSlice.showDetail);
    const getData = async () => {
        const response = await fetch(
            "https://react-http-973bc-default-rtdb.firebaseio.com/pokemons.json"
        );
        const data = await response.json();
        setData(data);
        dispatch(showDetailActions.updateData(data));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={classes.Pokemons}>
            <div className={classes.PokemonsContent}>
                <div className={classes.CardPokemons}>
                    {data.map((item) => (
                        <Card
                            img={item.imgUrl}
                            name={item.name}
                            number={item.id}
                            type={item.pokemonTypes}
                        />
                    ))}
                </div>
                <div className={classes.DetailPokemons}>{showDetail && <PokemonsDetail />}</div>
            </div>
        </div>
    );
}

export default Pokemons;
