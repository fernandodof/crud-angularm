import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HomeComponent,
  AngularmModule,
  ListEntitiesComponent,
  NewEntityComponent,
  ShowEntityComponent,
  EditEntityComponent,
  PageNotFoundComponent
} from 'angularm';

import { AppComponent } from './app.component';
import { EditFormLineComponent } from "app/edit-entity/edit-form-line";

export const routes: Routes = [
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewEntityComponent,
    ShowEntityComponent,
    EditEntityComponent,
    EditFormLineComponent,
    PageNotFoundComponent
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
    EditFormLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
