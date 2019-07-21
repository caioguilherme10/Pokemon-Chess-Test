import React, { useState }  from 'react';
import { StyleSheet, css } from 'aphrodite';

function Treinador(props) {

    let pokemonescolhido = '';

    const atribuirpokemon = (pokemon) => {
        pokemonescolhido = pokemon;
    };

    const pokemons = props.pokemons;
    const listItems = pokemons.map( (pokemon, index) =>
        <li className={css(styles.li)} key={index} onClick={() => atribuirpokemon(pokemon)}>{pokemon.name}</li>
    );
    return (
        <div>
            <ul>{listItems}</ul>
            <button onClick={() => props.selectpokemon(pokemonescolhido,props.treinador)}>
                Escolher pokemon
            </button>
        </div>
    );
}

const styles = StyleSheet.create({
    li: {
        border: '5px solid gray',
        listStyleType: 'none',
        ':hover': {
            backgroundColor: 'yellow'
        }
    }
});

export default Treinador;