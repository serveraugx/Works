import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrl: './bill-form.component.css'
})
export class BillFormComponent {
 billForm: FormGroup;
  formHidden = false; // initially shown
  selectedBillItem = '';
  
  billItems = ['Transcript', 'COP Supplementary', 'Bimtech Conference Fee (Student)', 'Bimtech Conference Fee (Non Student)'];

  constructor(private fb: FormBuilder) {
    this.billForm = this.fb.group({
      billItem: [''],
      registrationNumber: [''],
      firstName: [''],
      lastName: [''],
      phone: [''],
      email: ['']
    });
  }

  toggleForm() {
    this.formHidden = !this.formHidden;
  }

  onBillItemChange(item: string) {
    this.selectedBillItem = item;
    this.billForm.reset();  // Reset the form when the item changes
  }

  onSubmit() {
    if (this.billForm.valid) {
      console.log('Form Submitted', this.billForm.value);
    }
  }
}
