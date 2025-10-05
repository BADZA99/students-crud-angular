import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudent } from './Students/create-student/create-student';
import { IndexStudent } from './Students/index-student/index-student';

const routes: Routes = [
  {
// route pour la page d'accueil
    path: '',
    component: IndexStudent,
  },
  {
    // ! route pour la création d'un étudiant
    path: 'create-student',
    component: CreateStudent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
