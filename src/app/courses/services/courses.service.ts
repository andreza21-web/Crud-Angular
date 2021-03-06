import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //CAMINHO DO ENDPOINT
  private readonly API = '/api/courses';

  constructor(private httpClient: HttpClient) { }

  //retorna um observable
  // pipe faz uma manipulação dos dados
  // first primeira resposta
  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(courses => console.log(courses))
      );
  }
}
