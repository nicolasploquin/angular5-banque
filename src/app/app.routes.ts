

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientsComponent} from "./clients.component";
import {ClientFormComponent} from "./client-form.component";
import {DemoComponent} from "./demo.component";
import {ClientComponent} from "./client.component";

const routes: Routes = [{
  path: "",
  component: ClientsComponent,
  pathMatch: "full"
}, {
  path: "client/form",
  component: ClientFormComponent
}, {
  path: "demo",
  component: DemoComponent
}, {
  path: "client/:id",
  component: ClientComponent
}, {
//   path: 'client/add',
//   component: ClientFormComponent
// }, {
  path: "**",
  redirectTo: "/"
}];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
