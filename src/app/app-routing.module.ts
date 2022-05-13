import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent }   from './search/search.component';
import { PokemonComponent }   from './pokemon/pokemon.component';
import { TodoComponent }   from './todo/todo.component';



const routes: Routes = [
  { path: '', redirectTo:'pokemon', pathMatch:'full'},
  { path: 'LearnAngular/search', component: SearchComponent },
  { path: 'LearnAngular/pokemon', component: PokemonComponent },
  { path: 'LearnAngular/todo', component: TodoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
