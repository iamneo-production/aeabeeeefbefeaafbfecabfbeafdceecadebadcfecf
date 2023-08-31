import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
registrationForm: FormGroup;
readonly REQUIRED = 'required';

constructor(private formBuilder: FormBuilder) {
  this.registrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-z]*$')]],
    gender: ['male', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    age: ['',[Validators.pattern('[0-9]*$')]]
  }, {validator: this.ageValidator});
}


ageValidator = (formGroup: FormGroup) => {
  const countryControl = formGroup.get('country');
  const ageControl = formGroup.get('age');
  
  if (countryControl && ageControl && (countryControl.value === 'US' || countryControl.value === 'Canada' || countryControl.value === 'India')) {
    if (!ageControl.value) {
      ageControl.setErrors({required: true});
    } else {
      ageControl.setErrors(null);
    }
  }
};


onSubmit() {
if (this.registrationForm.valid) {
console.log(this.registrationForm.value);

} else {
console.log(this.registrationForm.errors);
}
}
}