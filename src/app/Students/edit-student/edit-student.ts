import { Component, OnInit } from '@angular/core';
import { StudentForm } from '../student.module';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  standalone: false,
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css',
})
export class EditStudent implements OnInit {
  // Property to hold the student object being edited
  student: StudentForm | undefined;

  // Property to store the ID of the student retrieved from the URL
  studentId: number = 0;

  // Subscription object to manage the observable for route parameters
  paramSubscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute, // Service to access route parameters
    private studentService: StudentService, // Service to manage student data
    private router: Router // Service to navigate between routes
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get the student ID from the URL
    this.activatedRoute.params.subscribe({
      next: (param) => {
        // Parse the 'id' parameter from the URL and store it in studentId
        this.studentId = parseInt(param['id']);
      },
      error: (err) => {
        // Log any errors that occur while retrieving route parameters
        console.log(err);
      },
    });

    if (this.studentId!== 0 && this.studentId !== undefined && this.studentId > 0) {
      this.student = this.studentService.GetStudentById(this.studentId);
  }
}

  // Method to handle form submission
  SubmitForm() {
    this.studentService.UpdateStudent(this.studentId, this.student);
    alert('Student updated successfully!');
    this.router.navigate(['']);
  }
}
