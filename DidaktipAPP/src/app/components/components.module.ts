import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unlocker } from './unlocker/unlocker.component';
import { ActividadOverlayComponent } from './actividad-overlay/actividad-overlay.component';

import { LoginForm } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@NgModule({
	declarations: [Unlocker,LoginForm,ActividadOverlayComponent],
	imports: [CommonModule,FormsModule,IonicModule],
	exports: [Unlocker,LoginForm,ActividadOverlayComponent]
})
export class ComponentsModule {}