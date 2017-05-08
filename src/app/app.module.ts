import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TinyEditor } from './tools/tiny-editor';
import { Tool } from './tool/tool';

const appRoutes: Routes = [
  { path: 'tool',
    component: Tool },
  { path: '',
    redirectTo: '/tool',
    pathMatch: 'full' }, //redirects immediately to the tool
]

@NgModule({
  declarations: [
    AppComponent,
    TinyEditor,
    Tool
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
