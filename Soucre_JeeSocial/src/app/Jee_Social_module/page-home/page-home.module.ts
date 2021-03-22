import { PopoverModule } from 'ngx-smart-popover';


import { FlexLayoutModule } from '@angular/flex-layout';

import { PageHomeComponent } from './page-home.component';
import { NgModule } from '@angular/core';

import { PageHomeRoutingModule } from './page-home-routing.module';
import { LoadPagePersonalComponent } from './load-page-personal/load-page-personal.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { LoadPageHomeComponent } from './load-page-home/load-page-home.component';



const MY_FORMATS_EDIT: any = {
	parse: {
		dateInput: 'D/MM/YYYY'
	},
	display: {
		dateInput: 'DD/MM/YYYY',
		monthYearLabel: 'MMMM Y',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM Y'
	}
}


@NgModule({
  declarations: [
    PageHomeComponent,
    LoadPagePersonalComponent,
    LoadPageHomeComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue:MY_FORMATS_EDIT}
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    FlexLayoutModule,
  
     InfiniteScrollModule,
    NgbModule,
    // MdePopoverModule,
    // PickerModule,
    // NgxMatSelectSearchModule,
    MatChipsModule,
    MatSelectModule,
     PopoverModule,
      CommonModule,
    
      MatCardModule,
      MatIconModule,
    MatButtonModule,
    CKEditorModule,
    HttpClientModule,
      MatMenuModule,
      MatSelectModule,
      MatInputModule,
      MatTableModule,
      MatAutocompleteModule,
      MatRadioModule,
      // AngularEditorModule ,
      MatNativeDateModule,
      MatProgressBarModule,
      MatDatepickerModule,
      MatCardModule,
      MatPaginatorModule,
      MatSortModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      MatTabsModule,
      MatTooltipModule,
      MatDialogModule,
      MatCardModule,
      //  MatBadgeModule,
      // EditorModule,
      // ng-bootstrap modules
      NgbDropdownModule,
      // NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    MatFormFieldModule,
    // PortletModule,
    // PickerModule,
  
    
  ]
})
export class PageHomeModule { }
