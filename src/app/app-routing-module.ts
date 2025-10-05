import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudent } from './Students/create-student/create-student';
import { IndexStudent } from './Students/index-student/index-student';
import { EditStudent } from './Students/edit-student/edit-student';

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
  {

    path: 'edit-student/:id',
    component: EditStudent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
