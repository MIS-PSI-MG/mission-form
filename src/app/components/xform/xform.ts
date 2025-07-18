import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
} from '@angular/material/core';
import {
  MomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY', // Format for parsing user input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // Format for displaying the selected date in the input field
    monthYearLabel: 'MMM YYYY', // Format for the month/year label in the calendar header
    dateA11yLabel: 'DD/MM/YYYY', // Format for accessibility labels
    monthYearA11yLabel: 'MMMM YYYY', // Format for accessibility labels
  },
};

@Component({
  selector: 'app-xform',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MomentDateModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  templateUrl: './xform.html',
  styleUrl: './xform.css',
})
export class Xform {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<Date>) {
    this.myForm = this.fb.group({
      textInput: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
    this.dateAdapter.setLocale('fr-FR');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted:', this.myForm.value);
    }
  }
}
