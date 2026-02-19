import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveForm } from './Components/reactive-form/reactive-form';
import { ReactiveFormUsingFb } from './Components/reactive-form-using-fb/reactive-form-using-fb';

@Component({
  imports: [ReactiveForm, ReactiveFormUsingFb],
  selector: 'app-root',
  template: `
    <app-reactive-form-using-fb></app-reactive-form-using-fb>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
