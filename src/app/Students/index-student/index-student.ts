import { StudentService } from './../student-service';
import { Component, OnInit } from '@angular/core';
import { StudentForm } from '../student.module';
import { Router } from '@angular/router';

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

  constructor(private StudentService: StudentService,private router:Router) {}

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

  DeleteStudent(id: number) {
    this.StudentService.DeleteStudentFromArray(id);
    this.LoadStudentData();
    alert('Student deleted successfully!');
  }

  EditStudent(id: number) {
   this.router.navigate(['/edit-student',id]);
  }
}
