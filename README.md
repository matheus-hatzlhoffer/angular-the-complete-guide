# Angular - The Complete Guide

this repository holds the notes taken down during the [Angular - The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/?couponCode=ST2MT43024)

## Module 1 - Getting Started

Angular is a Js framework which allows you to create reactive Single-Page-Applications (SPAs)

``` sh
ng new my-first-app --no-strict --standalone false --routing false
```

Wizard Options - CSS

## Module 2 - The Basics

- The Angular sends the index.html file to the browser
- The selector is the component attribute that Angular uses to replace the HTML  custom tags
- The main.ts script analyzes the app.module
- The app.module points to the app.component files that have the HTML code and the code selector
- So Angular can replace the HTML custom tag in the index.html

### Event binding

- Output data
  - String Interpolation
    - inline typescript code that returns a string
  - Property Binding
- React to (User) Events
  - Event Binding
- Two way-

## Module 9 - Components and Databinding Deep Dive

@Input() to expose elements do bind with parents components
to use a alias add the sting as Input parameter - Input('alias')

To create a event you can use @Output('alias'), the alias paramter is optional' and an eventEmitter.

Sometimes the distance between components comunications are very long and this Input() Output() chain is not the best approach.
