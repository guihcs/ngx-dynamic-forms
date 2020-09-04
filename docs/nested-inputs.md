---
layout: docs
---
## Nested Inputs

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

The `@NestedInput` tag have a label as first parameter and search depth as second. 
You can chain nested objects with this tag. Use the search depth to control the nesting depth. 


![Nested Input](https://raw.githubusercontent.com/guilherme-fafic/ngx-dynamic-forms/master/projects/dynamic-forms/assets/nestinput.png)

The result will be set as an object.

```javascript
let formResult = {
    /* ... */
  address: {
    street: '',
    city: ''
  } 
}
