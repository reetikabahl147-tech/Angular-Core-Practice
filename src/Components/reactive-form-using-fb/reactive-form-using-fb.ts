import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-using-fb',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-using-fb.html',
  styleUrl: './reactive-form-using-fb.css',
})
export class ReactiveFormUsingFb {
  // Instead of constructor, now using inject() for injecting services and making it private
  private formBuilder = inject(FormBuilder);
  myform = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.max(80)]],
    gender: ['', Validators.required],
    address: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  submitForm() {
    console.log(this.myform.value)
  }

  updateForm() {
    this.myform.patchValue({
      name: 'Reetika'
    })
  }

  get addressLines() {
    return this.myform.get('address') as FormArray;
  }

  addAddressLine() {
    this.addressLines.push(this.formBuilder.control(''));
  }
}


