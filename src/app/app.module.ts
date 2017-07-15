import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HomeComponent,
  AngularmModule,
} from 'angularm';

import { AppComponent } from './app.component';
// import { EditFormLineComponent } from "app/edit-entity/edit-form-line";
import { NewEntityComponent } from "app/new-entity/new-entity.component";
import { ShowEntityComponent } from "app/show-entity/show-entity.component";
import { EditEntityComponent } from "app/edit-entity/edit-entity.component";
import { ListEntityTypeComponent } from "app/list-entity-type/list-entity-type.component";

export const routes: Routes = [
  { path: ':entitytypename', component: ListEntityTypeComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEntityTypeComponent,
    NewEntityComponent,
    ShowEntityComponent,
    EditEntityComponent,
    // EditFormLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularmModule,
    BrowserAnimationsModule

  ],
  providers: [],
  entryComponents: [
    // EditFormLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
