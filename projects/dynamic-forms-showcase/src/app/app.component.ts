import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {User} from "./User";
import {Observable, of} from "rxjs";
import {DynamicFormsComponent} from "dynamic-forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'dynamic-forms-showcase';

  user: Observable<User> = of<User>(new User());

  @ViewChild(DynamicFormsComponent) dynamicForm: DynamicFormsComponent;

  ngAfterViewInit(): void {

    let formResult = this.dynamicForm.getResult();

    console.log(formResult);


  }


}
