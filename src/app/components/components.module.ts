import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';
import { IonModal, IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AvatarComponent,
    ButtonComponent
  ],
  exports: [
    AvatarComponent,
    ButtonComponent
  ],    
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
