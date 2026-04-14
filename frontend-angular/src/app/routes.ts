import { Routes } from '@angular/router';
import { ListarCidades } from './listar-cidades';
import { ListarComercios } from './listar-comercios';

export const routes: Routes = [
  { path: '', component: ListarCidades },
  { path: 'comercios/:cidadeId', component: ListarComercios }
];