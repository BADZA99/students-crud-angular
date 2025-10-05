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

  DeleteStudentFromArray(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    //  La méthode findIndex retourne -1 si aucun élément correspondant n'est trouvé dans le tableau.
    if (index !== -1 && index !== undefined) {
      // La méthode splice est utilisée pour supprimer ou remplacer des éléments dans un tableau(index de départ, nombre d'éléments à supprimer a partir de cet index)
      this.students.splice(index, 1);
    }
  }

}
