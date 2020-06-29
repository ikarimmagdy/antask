import { Injectable } from '@angular/core';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private students: IStudent[] = [
    {
      firstName: "Mark",
      lastName: "Louis",
      dateOfBirth: "1/1/1990",
      classId: 1
    },
    {
      firstName: "Paul",
      lastName: "George",
      dateOfBirth: "1/1/1990",
      classId: 1
    },
    {
      firstName: "Pablo",
      lastName: "Sabw",
      dateOfBirth: "1/1/1990",
      classId: 2
    },
    {
      firstName: "Treko",
      lastName: "Lako",
      dateOfBirth: "1/1/1990",
      classId: 2
    }
  ];


  public getStudent(): IStudent[] {
    return this.students;
  }
}
