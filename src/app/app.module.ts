import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Assurez-vous que RouterModule est importé
import { ScrollingModule } from '@angular/cdk/scrolling'; // Import ScrollingModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ElementListComponent } from './element-list/element-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageDetailComponent,
    ElementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Add RouterModule to imports
    HttpClientModule,
    ScrollingModule, // Add ScrollingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
