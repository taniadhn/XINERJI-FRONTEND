import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { PipesModule } from '../pipes/pipes.module';
import { EDropdownComponent } from './e-dropdown/e-dropdown.component';
import { EJalaliDatePickerComponent } from './e-jalali-date-picker/e-jalali-date-picker.component';
import { ELoadingComponent } from './e-loading/e-loading.component';
import { ETitleComponent } from './e-title/e-title.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ELoadingComponent,
    EJalaliDatePickerComponent,
    EDropdownComponent,
    ETitleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    DropdownModule,
  ],
  exports: [
    ELoadingComponent,
    EJalaliDatePickerComponent,
    EDropdownComponent,
    ETitleComponent,
  ],
  providers: [],
})
export class ElementsModule {}
