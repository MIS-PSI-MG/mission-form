import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mform',
  imports: [
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './mform.html',
  styleUrl: './mform.css',
})
export class Mform implements OnInit {
  eventForm: FormGroup;
  fields: string[] = ['Technology', 'Business', 'Education', 'Health', 'Arts'];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventDate: ['', [Validators.required]],
      theme: ['', [Validators.required, Validators.minLength(3)]],
      period: this.fb.group({
        startMonthYear: ['', [Validators.required]],
        endMonthYear: ['', [Validators.required]],
      }),
      field: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('Form Submitted:', this.eventForm.value);
      this.eventForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  // Optional: Add custom date filter to restrict date picker to future dates
  dateFilter = (date: Date | null): boolean => {
    const today = new Date();
    return date ? date >= today : true;
  };
}
