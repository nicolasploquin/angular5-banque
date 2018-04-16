import {NgModule} from "@angular/core";
import * as md from "@angular/material";

@NgModule({
  imports: [
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule
  ],
  exports: [
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
