import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material.module';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AuthentificationComponent
  ],
  declarations: [
    AuthentificationComponent
  ]
})
export class EniCmpModule { }
