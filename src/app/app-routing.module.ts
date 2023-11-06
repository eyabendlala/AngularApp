// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ElementListComponent } from './element-list/element-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ImageListComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: 'element', component: ElementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Utilisez correctement l'import de RouterModule ici
  exports: [RouterModule]
})
export class AppRoutingModule {}
