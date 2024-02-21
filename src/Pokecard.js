import React, { Component } from 'react'
const POKE_API ="https://pokeapi.co/api/v2/pokemon/ditto"


class Pokecard extends Component{
    render(){
        let imgsrc = `${POKE_API}`
        console.log(imgsrc)
        return(
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={imgsrc} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;