---
layout: docs
permalink: /docs/default-inputs
---

# Default Inputs

The default inputs use the tag `@FormInput(descriptor)`. The descriptor have the following fields.

```typescript
class InputDescriptor {
    label: string;
    type?: string = 'text';
    styleClass?: any;
    required?: boolean;
    validators?: Validator[];
    errorMessage?: string;
}
```

## Description
Here are the properties of the default fields.
* **label** - the label that shows int the form.
* **type** - the type of the field. Possible inputs are text and checkbox.
* **styleClass** - the css class of this field.
* **required** - set the required property of field.
* **validators** - a list of angular form validatores to apply to this field.
* **errorMessage** - the message that appear if the validators resolve to false.

## Label

The decorator `@Label(descriptor)` is used to show text in the form. The label decorator accepts a InputDescriptor that you can use to configure the label.
