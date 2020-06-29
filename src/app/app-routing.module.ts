import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full'
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/view-classes/view-classes.module').then(m => m.ViewClassesPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/view-students/view-students.module').then(m => m.ViewStudentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
