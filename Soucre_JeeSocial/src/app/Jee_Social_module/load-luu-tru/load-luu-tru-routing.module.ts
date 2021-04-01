import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadLuutruComponent } from './load-luutru/load-luutru.component';

const routes: Routes = [
{path:'',component:LoadLuutruComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadLuuTruRoutingModule { }
