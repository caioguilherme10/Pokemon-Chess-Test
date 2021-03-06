import React, { useState }  from 'react';
import { StyleSheet, css } from 'aphrodite';

import Treinador from '../components/Treinador';
import Batalha from '../components/Batalha';

function Principal() {

    const pokemons = [{
        name: 'Bulbasaur',
        hp: 45,
        attack: 49,
        defense: 49,
        spAttack: 65,
        spDefense: 65,
        speed: 45,
        total: 318,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 45,
            tipo: 'attack',
            name: 'Vine Whip',
            type: 'Grass'
        },
        type: {
            name: ['Grass','Poison'],
            x2: ['Flying','Fire','Psychic','Ice'],
            x1: ['Normal','Poison','Ground','Rock','Bug','Ghost','Steel','Dragon','Dark'],
            x0: [],
            x12: ['Fighting','Water','Grass','Electric','Fairy']
        }
    },{
        name: 'Charmander',
        hp: 39,
        attack: 52,
        defense: 43,
        spAttack: 60,
        spDefense: 50,
        speed: 65,
        total: 309,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'spattack',
            name: 'Ember',
            type: 'Fire'
        },
        type: {
            name: ['Fire'],
            x2: ['Ground','Rock','Water'],
            x1: ['Normal','Fighting','Flying','Poison','Ghost','Electric','Psychic','Dragon','Dark'],
            x0: [],
            x12: ['Bug','Steel','Fire','Grass','Ice','Fairy']
        }
    },{
        name: 'Squirtle',
        hp: 44,
        attack: 48,
        defense: 65,
        spAttack: 50,
        spDefense: 64,
        speed: 43,
        total: 314,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'spattack',
            name: 'Bubble',
            type: 'Water'
        },
        type: {
            name: ['Water'],
            x2: ['Grass','Electric'],
            x1: ['Normal','Fighting','Flying','Poison','Ground','Rock','Bug','Ghost','Psychic','Dragon','Dark','Fairy'],
            x0: [],
            x12: ['Steel','Fire','Water','Ice']
        }
    },{
        name: 'Caterpie',
        hp: 45,
        attack: 30,
        defense: 35,
        spAttack: 20,
        spDefense: 20,
        speed: 45,
        total: 195,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'attack',
            name: 'Tackle',
            type: 'Normal'
        },
        type: {
            name: ['Bug'],
            x2: ['Flying','Rock','Fire'],
            x1: ['Normal','Poison','Bug','Ghost','Steel','Water','Electric','Psychic','Ice','Dragon','Dark','Fairy'],
            x0: [],
            x12: ['Fighting','Ground','Grass']
        }
    },{
        name: 'Weedle',
        hp: 40,
        attack: 35,
        defense: 30,
        spAttack: 20,
        spDefense: 20,
        speed: 50,
        total: 195,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'attack',
            name: 'Tackle',
            type: 'Normal'
        },
        type: {
            name: ['Bug','Poison'],
            x2: ['Flying','Rock','Fire','Psychic'],
            x1: ['Normal','Ground','Ghost','Steel','Water','Electric','Ice','Dragon','Dark'],
            x0: [],
            x12: ['Fighting','Poison','Bug','Grass','Fairy']
        }
    },{
        name: 'Pidgey',
        hp: 40,
        attack: 45,
        defense: 40,
        spAttack: 35,
        spDefense: 35,
        speed: 56,
        total: 251,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'spattack',
            name: 'Gust',
            type: 'Flying'
        },
        type: {
            name: ['Normal','Flying'],
            x2: ['Rock','Electric','Ice'],
            x1: ['Normal','Fighting','Flying','Poison','Steel','Water','Fire','Psychic','Dragon','Dark','Fairy'],
            x0: ['Ground','Ghost'],
            x12: ['Bug','Grass']
        }
    },{
        name: 'Nidoran ♀',
        hp: 55,
        attack: 47,
        defense: 52,
        spAttack: 40,
        spDefense: 40,
        speed: 41,
        total: 275,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 40,
            tipo: 'attack',
            name: 'Scratch',
            type: 'Normal'
        },
        type: {
            name: ['Poison'],
            x2: ['Ground','Psychic'],
            x1: ['Normal','Flying','Rock','Ghost','Steel','Water','Fire','Electric','Ice','Dragon','Dark'],
            x0: [],
            x12: ['Fighting','Poison','Bug','Grass','Fairy']
        }
    },{
        name: 'Nidoran ♂',
        hp: 46,
        attack: 57,
        defense: 40,
        spAttack: 40,
        spDefense: 40,
        speed: 50,
        total: 273,
        level: 50,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 35,
            tipo: 'attack',
            name: 'Peck',
            type: 'Flying'
        },
        type: {
            name: ['Poison'],
            x2: ['Ground','Psychic'],
            x1: ['Normal','Flying','Rock','Ghost','Steel','Water','Fire','Electric','Ice','Dragon','Dark'],
            x0: [],
            x12: ['Fighting','Poison','Bug','Grass','Fairy']
        }
    }];

    const nature = [{
        name: 'Hardy',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Lonely',
        attack: 1.1,
        defense: 0.9,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Adamant',
        attack: 1.1,
        defense: 1,
        spattack: 0.9,
        spdefense: 1,
        speed: 1
    },{
        name: 'Naughty',
        attack: 1.1,
        defense: 1,
        spattack: 1,
        spdefense: 0.9,
        speed: 1
    },{
        name: 'Brave',
        attack: 1.1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 0.9
    },{
        name: 'Bold',
        attack: 0.9,
        defense: 1.1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Docile',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Impish',
        attack: 1,
        defense: 1.1,
        spattack: 0.9,
        spdefense: 1,
        speed: 1
    },{
        name: 'Lax',
        attack: 1,
        defense: 1.1,
        spattack: 1,
        spdefense: 0.9,
        speed: 1
    },{
        name: 'Relaxed',
        attack: 1,
        defense: 1.1,
        spattack: 1,
        spdefense: 1,
        speed: 0.9
    },{
        name: 'Modest',
        attack: 0.9,
        defense: 1,
        spattack: 1.1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Mild',
        attack: 1,
        defense: 0.9,
        spattack: 1.1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Bashful',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Rash',
        attack: 1,
        defense: 1,
        spattack: 1.1,
        spdefense: 0.9,
        speed: 1
    },{
        name: 'Quiet',
        attack: 1,
        defense: 1,
        spattack: 1.1,
        spdefense: 1,
        speed: 0.9
    },{
        name: 'Calm',
        attack: 0.9,
        defense: 1,
        spattack: 1,
        spdefense: 1.1,
        speed: 1
    },{
        name: 'Gentle',
        attack: 1,
        defense: 0.9,
        spattack: 1,
        spdefense: 1.1,
        speed: 1
    },{
        name: 'Careful',
        attack: 1,
        defense: 1,
        spattack: 0.9,
        spdefense: 1.1,
        speed: 1
    },{
        name: 'Quirky',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    },{
        name: 'Sassy',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1.1,
        speed: 0.9
    },{
        name: 'Timid',
        attack: 0.9,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1.1
    },{
        name: 'Hasty',
        attack: 1,
        defense: 0.9,
        spattack: 1,
        spdefense: 1,
        speed: 1.1
    },{
        name: 'Jolly',
        attack: 1,
        defense: 1,
        spattack: 0.9,
        spdefense: 1,
        speed: 1.1
    },{
        name: 'Naive',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 0.9,
        speed: 1.1
    },{
        name: 'Serious',
        attack: 1,
        defense: 1,
        spattack: 1,
        spdefense: 1,
        speed: 1
    }];

    const [pokemondotreinador1, setpokemondotreinador1] = useState({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        spAttack: 0,
        spDefense: 0,
        speed: 0,
        total: 0,
        level: 0,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 0,
            tipo: '',
            name: ''
        }
    });

    const [pokemondotreinador2, setpokemondotreinador2] = useState({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        spAttack: 0,
        spDefense: 0,
        speed: 0,
        total: 0,
        level: 0,
        iv: 0,
        ev: 0,
        nature: '',
        rodadas: 0,
        habilidade: {
            power: 0,
            tipo: '',
            name: ''
        }
    });

    const selectpokemon = (pokemon,treinador) => {
        let status = getStatus(pokemon);
        if(treinador===1){
            setpokemondotreinador1({
                name: pokemon.name,
                hp: status.hp,
                attack: status.attack,
                defense: status.defense,
                spAttack: status.spattack,
                spDefense: status.spdefense,
                speed: status.speed,
                total: pokemon.total,
                level: pokemon.level,
                iv: status.iv,
                ev: status.ev,
                nature: status.nature,
                rodadas: pokemon.rodadas,
                habilidade: pokemon.habilidade
            });
        }else{
            setpokemondotreinador2({
                name: pokemon.name,
                hp: status.hp,
                attack: status.attack,
                defense: status.defense,
                spAttack: status.spattack,
                spDefense: status.spdefense,
                speed: status.speed,
                total: pokemon.total,
                level: pokemon.level,
                iv: status.iv,
                ev: status.ev,
                nature: status.nature,
                rodadas: pokemon.rodadas,
                habilidade: pokemon.habilidade
            });
        }
    };

    const getStatus = (pokemonT) => {
        let novoiv = Math.floor(Math.random() * 32);
        let novonature = getNature();
        let novoev = getEV(pokemonT);
        let novohp = (((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100) + pokemonT.level + 10;
        let novoattack = ((((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100)+5)*novonature.attack;
        let novodefense = ((((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100)+5)*novonature.defense;
        let novospattack = ((((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100)+5)*novonature.spattack;
        let novospdefense = ((((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100)+5)*novonature.spdefense;
        let novospeed = ((((2*pokemonT.hp+novoiv+(novoev/4))*pokemonT.level)/100)+5)*novonature.speed;

        let status = {
            iv: novoiv,
            nature: novonature,
            ev: novoev,
            hp: novohp,
            attack: novoattack,
            defense: novodefense,
            spattack: novospattack,
            spdefense: novospdefense,
            speed: novospeed
        }

        return status
    };

    
    const getEV = (pokemon) => {
        return pokemon.rodadas * 9;
    };

    const getNature = () => {
        let randomNumber = Math.floor(Math.random()*nature.length);
        return nature[randomNumber];
    };

    const treinador1 = 1;
    const treinador2 = 2;

    return (
        <div className={css(styles.div)}>
            <div className={css(styles.divTreinador1)}>
                <Treinador pokemons={pokemons} treinador={treinador1} selectpokemon={selectpokemon}/>
            </div>
            <div className={css(styles.divTreinador2)}>
                <Treinador pokemons={pokemons} treinador={treinador2} selectpokemon={selectpokemon}/>
            </div>
            <div className={css(styles.divBatalha)}>
                <Batalha pokemonT1={pokemondotreinador1} pokemonT2={pokemondotreinador2}/>
            </div>
            <div className={css(styles.divStatus)}>
                <h1>treinador1</h1>
                <p>Nome: {pokemondotreinador1.name}</p>
                <p>HP: {pokemondotreinador1.hp}</p>
                <p>Attack: {pokemondotreinador1.attack}</p>
                <p>Defense: {pokemondotreinador1.defense}</p>
                <p>SpAttack: {pokemondotreinador1.spAttack}</p>
                <p>SpDefense: {pokemondotreinador1.spDefense}</p>
                <p>Speed: {pokemondotreinador1.speed}</p>
                <p>Total: {pokemondotreinador1.total}</p>
                <p>Level: {pokemondotreinador1.level}</p>
                <p>IV: {pokemondotreinador1.iv}</p>
                <p>EV: {pokemondotreinador1.ev}</p>
                <p>Nature: {pokemondotreinador1.nature.name}</p>
                <p>habilidade name: {pokemondotreinador1.habilidade.name}</p>
                <p>habilidade power: {pokemondotreinador1.habilidade.power}</p>
                <p>habilidade tipo: {pokemondotreinador1.habilidade.tipo}</p>
                <p>habilidade type: {pokemondotreinador1.habilidade.type}</p>
            </div>
            <div className={css(styles.divStatus)}>
                <h1>treinador2</h1>
                <p>Nome: {pokemondotreinador2.name}</p>
                <p>HP: {pokemondotreinador2.hp}</p>
                <p>Attack: {pokemondotreinador2.attack}</p>
                <p>Defense: {pokemondotreinador2.defense}</p>
                <p>SpAttack: {pokemondotreinador2.spAttack}</p>
                <p>SpDefense: {pokemondotreinador2.spDefense}</p>
                <p>Speed: {pokemondotreinador2.speed}</p>
                <p>Total: {pokemondotreinador2.total}</p>
                <p>Level: {pokemondotreinador2.level}</p>
                <p>IV: {pokemondotreinador2.iv}</p>
                <p>EV: {pokemondotreinador2.ev}</p>
                <p>Nature: {pokemondotreinador2.nature.name}</p>
                <p>habilidade name: {pokemondotreinador2.habilidade.name}</p>
                <p>habilidade power: {pokemondotreinador2.habilidade.power}</p>
                <p>habilidade tipo: {pokemondotreinador2.habilidade.tipo}</p>
                <p>habilidade type: {pokemondotreinador2.habilidade.type}</p>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    div: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    divTreinador1: {
        height: '50vh',
        width: '50vw',
        backgroundColor: 'white',
        overflow: 'auto'
    },
    divTreinador2: {
        height: '50vh',
        width: '50vw',
        backgroundColor: 'white',
        overflow: 'auto'
    },
    divBatalha: {
        display: 'flex',
        height: '50vh',
        width: '100vw',
        backgroundColor: 'white',
        overflow: 'auto',
        justifyContent: 'center',
    },
    divStatus: {
        height: '100vh',
        width: '50vw',
        backgroundColor: 'white',
    }
});

export default Principal;