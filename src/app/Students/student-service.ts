import { Injectable } from '@angular/core';
import { StudentForm } from './student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:StudentForm[]=[
    {id:1,name:'Alice',grade:'A'},
    {id:2,name:'Bob',grade:'B'},
    {id:3,name:'Charlie',grade:'C'}
  ];

  GetAllStudents():StudentForm[]{
    return this.students;
  }

  constructor() { }
}
