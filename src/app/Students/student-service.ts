import { CreateStudent } from './create-student/create-student';
import { Injectable } from '@angular/core';
import { StudentForm } from './student.module';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: StudentForm[] = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'C' },
  ];

  GetAllStudents(): StudentForm[] {
    return this.students;
  }

  CreateStudent(student: StudentForm) {
    let newStudent!: StudentForm;
    const length = this.students.length;
    if (length !== -1 && length !== undefined) {
      let newLenth = length - 1;
      let studentId = this.students[newLenth].id + 1;
      if (studentId !== undefined) {
        newStudent = { id: studentId, name: student.name, grade: student.grade };
      }
    }
    this.students.push(newStudent);
  }
}
