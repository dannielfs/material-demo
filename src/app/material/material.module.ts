import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponentes = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponentes],
  exports: [MaterialComponentes]
})
export class MaterialModule { }
