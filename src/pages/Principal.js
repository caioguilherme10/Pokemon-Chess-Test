import React, { useState }  from 'react';

function Principal() {
    const pokemon = {
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
        nature: ''
    };

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

    const [novopokemon, setnovopokemon] = useState({
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
            rodadas: 0
    });

    const alterarestado = () => {
        let novoiv = Math.floor(Math.random() * 32);
        let novonature = getNature();
        let novoev = getEV();
        let novohp = (((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100) + pokemon.level + 10;
        let novoattack = ((((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100)+5)*novonature.attack;
        let novodefense = ((((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100)+5)*novonature.defense;;
        let novospattack = ((((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100)+5)*novonature.spattack;;
        let novospdefense = ((((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100)+5)*novonature.spdefense;;
        let novospeed = ((((2*pokemon.hp+novoiv+(novoev/4))*pokemon.level)/100)+5)*novonature.speed;;
        
        setnovopokemon({
            name: pokemon.name,
            hp: novohp,
            attack: novoattack,
            defense: novodefense,
            spAttack: novospattack,
            spDefense: novospdefense,
            speed: novospeed,
            total: pokemon.total,
            level: pokemon.level,
            iv: novoiv,
            ev: pokemon.ev,
            nature: novonature.name,
            rodadas: novopokemon.rodadas
        });

    };

    const getEV = () => {
        return novopokemon.rodadas * 9;
    };

    const getNature = () => {
        var randomNumber = Math.floor(Math.random()*nature.length);
        return nature[randomNumber];
    };

    return (
        <div>
            <button onClick={() => alterarestado()}>
                Clique aqui
            </button>
            <p>Nome: {novopokemon.name}</p>
            <p>HP: {novopokemon.hp}</p>
            <p>Attack: {novopokemon.attack}</p>
            <p>Defense: {novopokemon.defense}</p>
            <p>SpAttack: {novopokemon.spAttack}</p>
            <p>SpDefense: {novopokemon.spDefense}</p>
            <p>Speed: {novopokemon.speed}</p>
            <p>Total: {novopokemon.total}</p>
            <p>Level: {novopokemon.level}</p>
            <p>IV: {novopokemon.iv}</p>
            <p>EV: {novopokemon.ev}</p>
            <p>Nature: {novopokemon.nature}</p>
        </div>
    );
}

export default Principal;