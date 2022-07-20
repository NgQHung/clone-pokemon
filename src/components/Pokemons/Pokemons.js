import React from "react";
import classes from "./Pokemons.module.css";
import Card from "../Ui/Card/Card";
import PokemonsDetail from "./PokemonsDetail/PokemonsDetail";

function Pokemons() {
    return (
        <div className={classes.Pokemons}>
            <div className={classes.CardPokemons}>
                <Card>hello</Card>
                <Card>hello</Card>
                <Card>hello</Card>
                <Card>hello</Card>
                <Card>hello</Card>
                <Card>hello</Card>
                <Card>hello</Card>
                {/* <Card>hello</Card>
                <Card>hello</Card> */}
            </div>
            <div className={classes.DetailPokemons}>{/* <PokemonsDetail /> */}</div>
        </div>
    );
}

export default Pokemons;
