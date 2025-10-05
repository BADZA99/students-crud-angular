import { Component } from '@angular/core';
import { Student } from '../student.module';

@Component({
  selector: 'app-index-student',
  standalone: false,
  templateUrl: './index-student.html',
  styleUrl: './index-student.css'
})
export class IndexStudent {
  // variable pour stocker la liste des étudiants qui est initialisée comme un tableau vide
students: Student[]=[
  {id:1, name:'Alice', grade:"A"},
  {id:2, name:'Bob', grade:"B"},
  {id:3, name:'Charlie', grade:"E"}

];
isStudent:boolean=false;
}
