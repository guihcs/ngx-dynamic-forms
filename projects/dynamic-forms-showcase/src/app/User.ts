import {CustomInput, FormInput, NestedInput} from "dynamic-forms";
import {CustomInputComponent} from "./custom-input/custom-input.component";


export class User {

  @FormInput({ label: "Name", type: "text" })
  name = 'cleber';

  @FormInput({ label: "Password", type: "password"})
  password;

  @FormInput({ label: "Email", type: "email"})
  email;

  @CustomInput(CustomInputComponent, {label: "Custom Input", args: {}})
  myCustomInput;

  @NestedInput('Address', 1)
  address = new NestedObject();

}


export class NestedObject {

  @FormInput({ label: "street", type: "text" })
  street;

  @FormInput({ label: "city", type: "text" })
  city;
}
