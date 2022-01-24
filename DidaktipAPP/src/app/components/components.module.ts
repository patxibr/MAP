import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unlocker } from './unlocker/unlocker.component';
@NgModule({
	declarations: [Unlocker],
	imports: [CommonModule],
	exports: [Unlocker]
})
export class ComponentsModule {}