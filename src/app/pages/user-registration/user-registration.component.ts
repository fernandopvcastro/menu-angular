import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { TableService } from '../../services/table-service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tableService: TableService
  ) {}

  onlyNumbersValidator(control: FormControl) {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { onlyNumbers: true };
  }

  exactlyElevenDigitsValidator(control: FormControl) {
    const valid = control.value && control.value.length === 11;
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
          this.exactlyElevenDigitsValidator,
        ],
      ],
      address: ['', Validators.required],
      born: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      const bornDate = new Date(formData.born);
      console.log('Dados do Formulário: ', formData);

      const dataToAdd = {
        ...formData,
        born: bornDate,
      };

      this.tableService.addFormData(dataToAdd);
      this.userForm.reset();
    }
  }
}
