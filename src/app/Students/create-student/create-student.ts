import { Component } from '@angular/core';
import { StudentForm } from '../student.module';
import { StudentService } from '../student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: false,
  templateUrl: './create-student.html',
  styleUrl: './create-student.css',
})
export class CreateStudent {
  student: StudentForm = {
    id: 0,
    name: '',
    grade: '',
  };

  // Inject the StudentService pour pouvoir l'utiliser dans ce composant
  constructor(private studentService: StudentService,private router:Router) {

  }

  SubmitForm() {
    this.studentService.CreateStudent(this.student);
    alert('Student created successfully!');
    this.router.navigateByUrl('');
  }
}
