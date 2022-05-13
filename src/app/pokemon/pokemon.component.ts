import { Component, OnInit } from '@angular/core';

import { Ipokemon } from '../shared/ipokemon';
import { POKEMONS } from '../shared/mock-pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  title : string = "";


  pokemonlists : Ipokemon[] = POKEMONS;
  gameCounter = 0;
  showPokemonID = 0;

  ChangeValue(value: boolean) {
    if (value = true) {
      this.gameCounter++;
      this.showPokemonID = Math.floor(Math.random()*this.pokemonlists.length)
      
    } else {
      this.gameCounter;
    }
  }



  constructor() { 
    console.log("constructor() called");
  }

  ngOnInit() {
    this.ChangeValue(true);
    console.log("Component init called - 第1次遊戲")
  }

}
