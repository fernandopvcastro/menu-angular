import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  // Função de validação para verificar se contém apenas números
  onlyNumbersValidator(control: FormControl) {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { onlyNumbers: true };
  }

  // Função de validação para verificar se possui exatamente 10 dígitos
  exactlyTenDigitsValidator(control: FormControl) {
    const valid = control.value && control.value.length === 10;
    return valid ? null : { exactlyTenDigits: true };
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          this.onlyNumbersValidator,
          this.exactlyTenDigitsValidator,
        ],
      ],
      address: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
