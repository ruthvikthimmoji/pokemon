import React, { Component } from 'react'
import Pokecard from './Pokecard';


class Pokedex extends Component{
    static defaultProps ={
        pokemon:[
            {id:4, name:'charmender', type:'fire', base_expeirence:62},
            {id:4, name:'Butterfree', type:'flying', base_expeirence:62},
            {id:4, name:'Pikachu', type:'electric', base_expeirence:62},
            {id:4, name:'Genger', type:'poison', base_expeirence:62},
            {id:4, name:'Eevee', type:'normal', base_expeirence:62}
        ]
    };
    render(){
        return(
            <div className='Pokedex'>
                <h1>Pokedex!</h1>
                {this.props.pokemon.map((p)=>(
                    <Pokecard id ={p.id} name ={p.name} type={p.type} exp={p.base_expeirence} />
                ))}
            </div>

        )
    }
}

export default Pokedex;