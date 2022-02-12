import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * config qual pagina devera mostrar primeiro
 */
const routes: Routes = [
  {path: "",pathMatch:"full", redirectTo: "courses"},
  //rota lazy-loading
  {
    path: "courses",
    loadChildren: () => import("./courses/courses.module").then(m => m.CoursesModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
