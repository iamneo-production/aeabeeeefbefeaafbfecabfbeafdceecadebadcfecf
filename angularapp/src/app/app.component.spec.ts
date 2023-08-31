import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [
AppComponent
],
imports: [
ReactiveFormsModule
]
}).compileComponents();
}));


it('should create the app', () => {
const fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app).toBeTruthy();
});

it('should have a form group', () => {
const fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app.registrationForm).toBeTruthy();
});

it('should be invalid if fields are empty', () => {
const fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app.registrationForm.valid).toBeFalsy();
});
it('should be invalid if age is required but not provided', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  const countryControl = app.registrationForm.get('country');
  const ageControl = app.registrationForm.get('age');
  if (countryControl && ageControl) {
    countryControl.setValue('US');
    expect(app.registrationForm.valid).toBeFalsy();
    ageControl.setValue('25');
    expect(app.registrationForm.valid).toBeTruthy();
  }
}
);
});




