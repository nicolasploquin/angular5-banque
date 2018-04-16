

import {Routes} from "@angular/router";

import {ClientsComponent} from './clients/clients.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {DemoComponent} from './demo/demo.component';
import {ClientComponent} from './client/client.component';

export const ROUTE_LISTE_CLIENTS = "clients";

export const ROUTES: Routes = [{
  path: "", component: ClientsComponent, pathMatch: "full"
}, {
  path: "demo", component: DemoComponent
}, {
  path: ROUTE_LISTE_CLIENTS, component: ClientsComponent
}, {
  path: "client/form", component: ClientFormComponent
}, {
  path: "client/:id", component: ClientComponent
}, {
//   path: 'client/add',
//   component: ClientFormComponent
// }, {
  path: "**", redirectTo: "/"
}];
