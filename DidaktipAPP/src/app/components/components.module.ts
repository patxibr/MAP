import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unlocker } from './unlocker/unlocker.component';
import { Mapa } from './mapa/mapa.component';
@NgModule({
	declarations: [Unlocker,Mapa],
	imports: [CommonModule],
	exports: [Unlocker,Mapa]
})
export class ComponentsModule {}