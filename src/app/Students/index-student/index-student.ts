import { StudentService } from './../student-service';
import { Component, OnInit } from '@angular/core';
import { StudentForm } from '../student.module';

@Component({
  selector: 'app-index-student',
  standalone: false,
  templateUrl: './index-student.html',
  styleUrl: './index-student.css',
})
export class IndexStudent implements OnInit {
  // ? ngOnInit méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
  this.LoadStudentData();
  }

  constructor(private StudentService:StudentService) {

  }


  // variable pour stocker la liste des étudiants qui est initialisée comme un tableau vide
  students: StudentForm[] = [];
  isStudent: boolean = false;

  LoadStudentData() {
    this.students = this.StudentService.GetAllStudents();
    if (this.students.length > 0) {
      this.isStudent = true;
    } else {
      this.isStudent = false;
    }
  }
}
