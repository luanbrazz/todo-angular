import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedAllComponent } from './components/red-all/red-all.component';

const routes: Routes = [ 
  {
    path: '',
    component: RedAllComponent
  },
  {
    path: 'finalizados', 
    component: FinalizadosComponent
  },
  {
    path: 'create', 
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
