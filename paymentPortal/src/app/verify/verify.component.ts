import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  verifyBillForm: FormGroup;
  formHidden = false; // initially shown

  constructor(private fb: FormBuilder) {
    this.verifyBillForm = this.fb.group({
      invoiceNumber: ['']
    });
  }

  toggleForm() {
    this.formHidden = !this.formHidden;
  }

  onSubmit() {
    if (this.verifyBillForm.valid) {
      console.log('Form Submitted', this.verifyBillForm.value);
    }
  }
}
