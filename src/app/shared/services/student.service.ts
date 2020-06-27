import { Injectable } from '@angular/core';
import { BASE_URL, GET_STUDENTS } from 'src/app/home/constants/network.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IStudent } from '../models/student.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


interface Response{
  _students : IStudent[]
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = BASE_URL;
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  addStudent(_class: IStudent): Observable<any> {
    return this.http.post<IStudent>('http://localhost:3000/api/create-class', _class, this.httpOptions)
      .pipe(
        catchError(this.handleError<IStudent>('Add Student'))
      );
  }

  getStudent(id): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('http://localhost:3000/api/' + id)
      .pipe(
        tap(_ => console.log(`Student fetched: ${id}`)),
        catchError(this.handleError<IStudent[]>(`Get Class id=${id}`))
      );
  }

  getStudentList(): Observable<Response> {
    return this.http.get<Response>(BASE_URL+GET_STUDENTS)
      .pipe(
        tap(_classes => console.log('Student fetched!')),
        catchError(this.handleError<Response>('Get Classes', ))
      );
  }

  getStudentListByClassId(_classId): Observable<Response> {
    return this.http.get<Response>(BASE_URL+GET_STUDENTS+ _classId)
      .pipe(
        tap(_classes => console.log('Student fetched!')),
        catchError(this.handleError<Response>('Get Classes', ))
      );
  }

  updateStudent(id, _class: IStudent): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-class/' + id, _class, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Student updated: ${id}`)),
        catchError(this.handleError<IStudent[]>('Student Class'))
      );
  }

  deleteStudent(id): Observable<IStudent[]> {
    return this.http.delete<IStudent[]>('http://localhost:3000/api/delete-class/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Class deleted: ${id}`)),
        catchError(this.handleError<IStudent[]>('Delete Student'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
