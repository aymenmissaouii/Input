# Angular Input Component
The Angular Input component is a reusable custom input field designed to enhance user input and provide a consistent user interface across your Angular applications.

### Features
* Customizable type: You can provide a type for the input field (Text, Password, etc).
* Placeholder support: The component supports placeholders to give users a hint about the expected input.
* Name Customization: The component allows you to customize the name, enabling its usage within a form.
* Custom Styling: This component grants you the ability to apply your preferred styles using the class name.
* Two-way binding: The input value is bound using Angular's two-way data binding, allowing seamless synchronization between the component and parent.

### Installation
1. Install the component using npm:
```
npm install https://github.com/aymenmissaouii/Input.git
```

2. Import the InputModule in your Angular application's module:
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputModule } from './input/input.module';

@NgModule({
  imports: [BrowserModule, InputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Usage
Use the app-input tag in your templates to include the Angular Input component:
```
<app-input name="name" placeholder="Enter your full name" id="name" type="Text" class="childInput" (dataEvent)="onDataReceived($event)"></app-input>
```


### API
### Properties
* type: (string) The type for the input field (optional).
* placeholder: (string) The placeholder text for the input field (optional). If provided, it will be displayed inside the input element as a hint.
* name: (string) The name of the input field (optional).
* class: (string) grants you the ability to apply your preferred styles using the class name (optional).

### Two-Way Binding
The input component supports two-way data binding. You can use the [(ngModel)] directive to bind the input value to a variable in your parent component:

```
<app-input [(ngModel)]="userInput"></app-input>
```

### Styling
You can customize the styles of the input component by using CSS classes. The component is designed to inherit styles from its parent container, making it easy to match your application's theme.

```
/* Custom styles for the input component */
app-input {
  /* Your styles here */
}

```

### Contributions
Contributions to the Angular Input component are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.




# Input

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
