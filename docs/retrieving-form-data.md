---
layout: docs
---

## Retrieving Form Data

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
