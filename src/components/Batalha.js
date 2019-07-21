import React, { useState }  from 'react';
import { StyleSheet, css } from 'aphrodite';

function Batalha(props) {

    const [string, setstring] = useState([]);

    const getDamageAttack = (pokemonA,pokemonD) => {
        let damage = (((((2*pokemonA.level)/5)+2)*pokemonA.habilidade.power*(pokemonA.attack/pokemonD.defense))/50)+2;
        return damage
    };

    const getDamageSpAttack = (pokemonA,pokemonD) => {
        let damage = (((((2*pokemonA.level)/5)+2)*pokemonA.habilidade.power*(pokemonA.spAttack/pokemonD.spDefense))/50)+2;;
        return damage
    };

    const batalha = () => {
        let pokemonT1 = props.pokemonT1;
        let pokemonT2 = props.pokemonT2;
        let damageT1T2 = 0 ;
        let damageT2T1 = 0 ;
        let hp1 = pokemonT1.hp;
        let hp2 = pokemonT2.hp;
        let list = [];
        if(pokemonT1.speed>=pokemonT2.speed){
            list.push('pokemon do treinador 1 e mais rapido do que o do treinador 2');
            setstring(list);
            while(hp1>0 && hp2>0){
                if(pokemonT1.habilidade.tipo==='attack'){
                    list.push('Tipo e attack do pokemon t1');
                    setstring(list);
                    damageT1T2 = getDamageAttack(pokemonT1,pokemonT2);
                    list.push('Dano do pokemon t1: '+ damageT1T2);
                    setstring(list);
                    hp2 = hp2 - damageT1T2;
                    list.push('HP do pokemon t2: '+hp2);
                    setstring(list);
                    if(hp2<=0){
                        list.push('Pokemon t1 ganhou!');
                        list.push('Pokemon t2 perdeu!');
                        setstring(list);
                        break;
                    }      
                }else{
                    list.push('Tipo e spAttack do pokemon t1');
                    setstring(list);
                    damageT1T2 = getDamageSpAttack(pokemonT1,pokemonT2);
                    list.push('Dano do pokemon t1: '+ damageT1T2);
                    setstring(list);
                    hp2 = hp2 - damageT1T2;
                    list.push('HP do pokemon t2: '+hp2);
                    setstring(list);
                    if(hp2<=0){
                        list.push('Pokemon t1 ganhou!');
                        list.push('Pokemon t2 perdeu!');
                        setstring(list);
                        break;
                    }
                }

                if(pokemonT2.habilidade.tipo==='attack'){
                    list.push('Tipo e attack do pokemon t2');
                    setstring(list);
                    damageT2T1 = getDamageAttack(pokemonT2,pokemonT1);
                    list.push('Dano do pokemon t2: '+ damageT2T1);
                    setstring(list);
                    hp1 = hp1 - damageT2T1;
                    list.push('HP do pokemon t1: '+hp1);
                    setstring(list);
                    if(hp1<=0 && hp2>0){
                        list.push('Pokemon t2 ganhou!');
                        list.push('Pokemon t1 perdeu!');
                        setstring(list);
                    }      
                }else{
                    list.push('Tipo e spAttack do pokemon t2');
                    setstring(list);
                    damageT2T1 = getDamageSpAttack(pokemonT2,pokemonT1);
                    list.push('Dano do pokemon t2: '+ damageT2T1);
                    setstring(list);
                    hp1 = hp1 - damageT2T1;
                    list.push('HP do pokemon t1: '+hp1);
                    setstring(list);
                    if(hp1<=0 && hp2>0){
                        list.push('Pokemon t2 ganhou!');
                        list.push('Pokemon t1 perdeu!');
                        setstring(list);
                    }
                }
            }
        }else{
            list.push('pokemon do treinador 2 e mais rapido do que o do treinador 1');
            setstring(list);
            while(hp1>0 && hp2>0){
                if(pokemonT2.habilidade.tipo==='attack'){
                    list.push('Tipo e attack do pokemon t2');
                    setstring(list);
                    damageT2T1 = getDamageAttack(pokemonT2,pokemonT1);
                    list.push('Dano do pokemon t2: '+ damageT2T1);
                    setstring(list);
                    hp1 = hp1 - damageT2T1;
                    list.push('HP do pokemon t1: '+hp1);
                    setstring(list);
                    if(hp1<=0){
                        list.push('Pokemon t2 ganhou!');
                        list.push('Pokemon t1 perdeu!');
                        setstring(list);
                        break;
                    }      
                }else{
                    list.push('Tipo e spAttack do pokemon t2');
                    setstring(list);
                    damageT2T1 = getDamageSpAttack(pokemonT2,pokemonT1);
                    list.push('Dano do pokemon t2: '+ damageT2T1);
                    setstring(list);
                    hp1 = hp1 - damageT2T1;
                    list.push('HP do pokemon t1: '+hp1);
                    setstring(list);
                    if(hp1<=0){
                        list.push('Pokemon t2 ganhou!');
                        list.push('Pokemon t1 perdeu!');
                        setstring(list);
                        break;
                    }
                }

                if(pokemonT1.habilidade.tipo==='attack'){
                    list.push('Tipo e attack do pokemon t1');
                    setstring(list);
                    damageT1T2 = getDamageAttack(pokemonT1,pokemonT2);
                    list.push('Dano do pokemon t1: '+ damageT1T2);
                    setstring(list);
                    hp2 = hp2 - damageT1T2;
                    list.push('HP do pokemon t2: '+hp2);
                    setstring(list);
                    if(hp2<=0 && hp1>0){
                        list.push('Pokemon t1 ganhou!');
                        list.push('Pokemon t2 perdeu!');
                        setstring(list);
                    }      
                }else{
                    list.push('Tipo e spAttack do pokemon t1');
                    setstring(list);
                    damageT1T2 = getDamageSpAttack(pokemonT1,pokemonT2);
                    list.push('Dano do pokemon t1: '+ damageT1T2);
                    setstring(list);
                    hp2 = hp2 - damageT1T2;
                    list.push('HP do pokemon t2: '+hp2);
                    setstring(list);
                    if(hp2<=0 && hp1>0){
                        list.push('Pokemon t1 ganhou!');
                        list.push('Pokemon t2 perdeu!');
                        setstring(list);
                    }
                }
            }
        }
    };

    const listItems = string.map( (texto, index) =>
        <li key={index}>{texto}</li>
    );

    return (
        <div>
             <button onClick={() => batalha()}>
                Batalhar
            </button>
            <ul>{listItems}</ul>
        </div>
    );
}

export default Batalha;