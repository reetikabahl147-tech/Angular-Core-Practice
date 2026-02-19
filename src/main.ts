import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveForm } from './Components/reactive-form/reactive-form';

@Component({
  imports: [ReactiveForm],
  selector: 'app-root',
  template: `
    <app-reactive-form></app-reactive-form>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
