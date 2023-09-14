import React, {useEffect, useState} from 'react';
import classes from './Pokemons.module.css';
import Card from '../Ui/Card/Card';
import PokemonsDetail, {PokemonsDetailEmpty} from './PokemonsDetail/PokemonsDetail';
import {useDispatch, useSelector} from 'react-redux/es/exports';
import {showDetailActions} from '../../store/showDetail-slice';
import Button from '../Ui/Button/Button';
import {loadMoreActions} from '../../store/loadMoreItems';
import LoadedMorePokemons from './LoadedMorePokemons/LoadedMorePokemons';

function Pokemons() {
    const [firstData, setFirstData] = useState([]);
    const [restData, setRestData] = useState([]);

    const dispatch = useDispatch();
    const showDetail = useSelector((state) => state.showDetailSlice.showDetail);
    const showMoreData = useSelector((state) => state.loadMore.loadMoreIsClicked);
    const getData = async () => {
        const response = await fetch(
            'https://react-http-973bc-default-rtdb.firebaseio.com/pokemons.json'
        );
        var data = await response.json();
        data.map((item) => {
            return dispatch(
                showDetailActions.updateData({
                    id: item.id,
                    name: item.name,
                    img: item.imgUrl,
                    number: item.id,
                })
            );
        });
        setFirstData(data.slice(0, 12));
        setRestData(data.slice(13, 150));
    };
    useEffect(() => {
        getData();
    }, []);

    const LoadHandler = (e) => {
        e.preventDefault();
        restData.map((item) => {
            return dispatch(
                loadMoreActions.show({
                    id: item.id,
                    name: item.name,
                    img: item.imgUrl,
                    number: item.id,
                })
            );
        });
    };

    return (
        <div className={classes.Pokemons}>
            <div className={classes.PokemonsInner}>
                <div className={classes.PokemonsContent}>
                    <div className={classes.CardPokemons}>
                        {firstData.map((item) => (
                            <div key={item.id} className={classes.item}>
                                <Card
                                    img={item.imgUrl}
                                    name={item.name}
                                    number={item.id}
                                    type={item.pokemonTypes}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.CardPokemons}>
                        {showMoreData && <LoadedMorePokemons />}
                    </div>
                    <div className={classes.LoadMore}>
                        <Button onClick={LoadHandler}>Load More</Button>
                    </div>
                </div>
            </div>
            <div className={classes.DetailPokemons}>
                <div className={classes.DetailContent}>
                    {!showDetail && <PokemonsDetailEmpty />}
                    {showDetail && <PokemonsDetail />}
                </div>
            </div>
        </div>
    );
}

export default Pokemons;
