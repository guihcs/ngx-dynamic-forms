---
layout: home
---
# DynamicForms

A dynamic form generator using Typescript Decorators.


## Quickstart

The default components use Angular Material.  Add with `ng add @angular/material`.  Install the library `ng add @guihss/ngx-dynamic-forms`.

Decorate the class you want to generate the form.

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

![Example form](/assets/img/sampleform.png)

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
