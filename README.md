[![npm badge](https://img.shields.io/npm/v/@guihss/ngx-dynamic-forms?color=green)](https://www.npmjs.com/package/@guihss/ngx-dynamic-forms)
![CI](https://github.com/guihcs/ngx-dynamic-forms/workflows/CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4b482f64d6ec469fb9bc03969b869106)](https://www.codacy.com/manual/guilherme.fafic/ngx-dynamic-forms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=guilherme-fafic/ngx-dynamic-forms&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/4b482f64d6ec469fb9bc03969b869106)](https://www.codacy.com/manual/guilherme.fafic/ngx-dynamic-forms?utm_source=github.com&utm_medium=referral&utm_content=guilherme-fafic/ngx-dynamic-forms&utm_campaign=Badge_Coverage)
# DynamicForms

A dynamic form generator using Typescript Decorators.

More info in [Dynamic Forms](https://guihcs.github.io/ngx-dynamic-forms/).


## How to install

The default components use Angular Material.  Add with `ng add @angular/material`.  Install the library `ng add @guihss/ngx-dynamic-forms`.
## Example

Annotate the class you want to generate the form.

```typescript
export class User {
  
  @FormInput({ label: "Name", type: "text" })
  name = 'Bob';
  
  @FormInput({ label: "Password", type: "password"})
  password;
  
  @FormInput({ label: "Email", type: "email"})
  email;
}
```

Create an observable instance.

```typescript
export class AppComponent {
  title = 'dynamic-forms-showcase';

  user: Observable<User> = of<User>(new User());
}
```

Add the dynamic-forms component to your page.

```html
<mat-card>
  <h1> Example form </h1>

  <dynamic-form
    formStyleClass="dynamic-form"
    [objectObservable]="user"
  ></dynamic-form>

</mat-card>
```

And see the result :D

![Example form](https://guihcs.github.io/ngx-dynamic-forms/assets/img/sampleform.png)

The inputs are rendered in the defined order and uses any values in the field as default. 
## Get form data

You can access the data inserted in the form with.

```typescript
class AppComponent {
    /* ... */
    @ViewChild(DynamicFormsComponent) dynamicForm: DynamicFormsComponent;
    
    ngAfterViewInit(): void {
    
        let formResult = this.dynamicForm.getResult();
    
    }
}
```

The result is a json with field names equals to the annotated field.
Filled with the form values.
```javascript
let formResult = {
  name: 'Bob',
  password: 'verysecurepassword',
  email: ''  
}
```


## Defining custom form inputs

With dynamic forms you can use your own components.

`ng generate component custom-input`

Implement the ConfigurableInput interface.

```typescript
export class CustomInputComponent implements ConfigurableInput {
  
  formControl = new FormControl();  

  applyArguments(args: any): any {
    /* here you can use the args passed in the annotation 
        to configure your input. */
  }

  getFormControl(): any {
    return this.formControl;
  }
  
}
```

Use the `@CustomInput` annotation in your model.

```typescript
export class User {

  /* ... */

  @CustomInput(CustomInputComponent, {label: "Custom Input", args: {}})
  myCustomInput;

}
```
The result: 
![Custom Input](https://guihcs.github.io/ngx-dynamic-forms/assets/img/custominput.png)

## Nesting inputs

You can nest inputs with dynamic forms.

```typescript
export class NestedObject {

  @FormInput({ label: "street", type: "text" })
  street;

  @FormInput({ label: "city", type: "text" })
  city;  
}

export class User {

    /* ... */

    @NestedInput('Address', /* search depth */ 1)
    address = new NestedObject();
}
```
Result:

![Nested Input](https://guihcs.github.io/ngx-dynamic-forms/assets/img/nestinput.png)

The form data are nested too.

```javascript
let formResult = {
  name: 'Bob',
  password: 'verysecurepassword',
  email: '',
  myCustomInput: '',
  address: {
    street: '',
    city: ''
  } 
}
```

## Showcase
The code has a showcase to help you in development if you want to improve the library.

Run with `ng serve`.
