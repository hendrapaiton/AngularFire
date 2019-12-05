import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./todos/todos.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: '/todo', pathMatch: 'full'},
      {path: 'todo', component: TodosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
