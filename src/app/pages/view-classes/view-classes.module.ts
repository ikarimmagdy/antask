import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClassesPageRoutingModule } from './view-classes-routing.module';

import { ViewClassesPage } from './view-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClassesPageRoutingModule
  ],
  declarations: [ViewClassesPage]
})
export class ViewClassesPageModule {}
