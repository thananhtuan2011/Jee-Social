// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Module

// Portlet
import { PortletComponent } from './portlet.component';
import { PortletHeaderComponent } from './portlet-header.component';
import { PortletBodyComponent } from './portlet-body.component';
import { PortletFooterComponent } from './portlet-footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	imports: [
		CommonModule,
		// CoreModule,
		MatProgressSpinnerModule,
		MatProgressBarModule
	],
	declarations: [
		PortletComponent,
		PortletHeaderComponent,
		PortletBodyComponent,
		PortletFooterComponent,
	],
	exports: [
		PortletComponent,
		PortletHeaderComponent,
		PortletBodyComponent,
		PortletFooterComponent,
	]
})
export class PortletModule {
}
