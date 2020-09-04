# DynamicForms

A dynamic form generator using class annotations.


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

```angular2html
<mat-card>
  <h1> Example form </h1>

  <dynamic-form
    formStyleClass="dynamic-form"
    [objectObservable]="user"
  ></dynamic-form>

</mat-card>
```

And see the result :D

![Example form](https://raw.githubusercontent.com/guilherme-fafic/ngx-dynamic-forms/master/projects/dynamic-forms/assets/sampleform.png)

The inputs are rendered in the defined order and uses any values in the field as default. 

## Showcase

The code has a show case to help you in development.

Run with `ng serve`.
