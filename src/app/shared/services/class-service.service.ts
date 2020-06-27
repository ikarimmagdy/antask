import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IClass } from '../models/class.mode';
import { catchError, tap } from 'rxjs/operators';
import { BASE_URL, GET_CLASSES } from 'src/app/home/constants/network.constants';

interface Response{
    _classes : IClass[]
  }

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  BASE_URL = BASE_URL;
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  addClass(_class: IClass): Observable<any> {
    return this.http.post<IClass>('http://localhost:3000/api/create-class', _class, this.httpOptions)
      .pipe(
        catchError(this.handleError<IClass>('Add Class'))
      );
  }

  getClass(id): Observable<IClass[]> {
    return this.http.get<IClass[]>('http://localhost:3000/api/' + id)
      .pipe(
        tap(_ => console.log(`Class fetched: ${id}`)),
        catchError(this.handleError<IClass[]>(`Get Class id=${id}`))
      );
  }

  getClassesList(): Observable<Response> {
    return this.http.get<Response>(BASE_URL+GET_CLASSES)
      .pipe(
        tap(_classes => console.log('Classes fetched!')),
        catchError(this.handleError<Response>('Get Classes', ))
      );
  }

  updateClass(id, _class: IClass): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-class/' + id, _class, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Class updated: ${id}`)),
        catchError(this.handleError<IClass[]>('Update Class'))
      );
  }

  deleteClass(id): Observable<IClass[]> {
    return this.http.delete<IClass[]>('http://localhost:3000/api/delete-class/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Class deleted: ${id}`)),
        catchError(this.handleError<IClass[]>('Delete Class'))
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
