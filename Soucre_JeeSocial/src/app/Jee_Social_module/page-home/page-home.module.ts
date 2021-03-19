import { FlexLayoutModule } from '@angular/flex-layout';

import { PageHomeComponent } from './page-home.component';
import { NgModule } from '@angular/core';

import { PageHomeRoutingModule } from './page-home-routing.module';
import { LoadPagePersonalComponent } from './load-page-personal/load-page-personal.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    PageHomeComponent,
    LoadPagePersonalComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    FlexLayoutModule
    
  ]
})
export class PageHomeModule { }
