import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';
import { RootComponent } from './root/root.component';
import { DemoComponent } from './demo/demo.component';
import { ClientsComponent } from './clients/clients.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ClientFormComponent } from './client-form/client-form.component';
import { BanqueLocalService } from './services/banque-local.service';
import { ClientComponent } from './client/client.component';
import { BanqueHttpService } from './services/banque-http.service';
import { MaterialModule } from './material.module';
import {EniCmpModule} from '../eni-cmp/eni-cmp.module';

@NgModule({
  declarations: [
    RootComponent,
    DemoComponent,
    ClientsComponent,
    CapitalizePipe,
    ClientFormComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    EniCmpModule
  ],
  providers: [
    BanqueLocalService,
    BanqueHttpService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
