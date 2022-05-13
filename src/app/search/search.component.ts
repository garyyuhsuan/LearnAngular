import { Component, OnInit } from '@angular/core';

import { Ipokemon } from '../shared/ipokemon';
import { POKEMONS } from '../shared/mock-pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title='寶可夢圖鑑';

  pokemonlists : Ipokemon[] = POKEMONS;
  // 設變數然後指向 POKEMONS，其實有點不太懂

  searchingStr: string = '';

  search() {
    this.pokemonlists = POKEMONS.filter(x => x.ChineseName.includes(this.searchingStr.trim()));
    this.pokemonlists = POKEMONS.filter(x => x.EnglishName.includes(this.searchingStr.trim()));
  }

  constructor() { }

  ngOnInit(): void {
  }


}
