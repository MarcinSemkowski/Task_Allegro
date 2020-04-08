import React, { Component } from 'react'

import styled from "styled-components";

const Sprite =  styled.img`
width : 5em;
height: 5em;

`;


export default class PokemonCard extends Component {
    state = {
       name: '',
       imageUrl: '',
       pokemonIndex: '' 
    };

    componentDidMount(){
        const name = this.props.name;
        const url = this.props.url;
        const pokemonIndex = url.split('/')[url.split('/').length -2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
        this.setState({
             name,
              imageUrl,
             pokemonIndex 
        }); 
    }

    render() {
       
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                 <div className="card">
                     <div className="card-header">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        <Sprite className="card-img-top rounded mx-auto" src={this.state.imageUrl}/>
                         <div className="card-body">
        <h6 className="card-title">{this.state.name
        .toLowerCase()
        .split(' ')
        .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join(' ')}</h6>
                             </div> 
                     </div>
                     </div>                
            </div>
        )
    }
}
