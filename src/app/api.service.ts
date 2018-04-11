import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from './post';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http ) {}

  public getAllTodos(): Observable<Post[]> {
    return this.http
      .get(API_URL + '/posts').map(response => {
        const posts = response.json();
        return posts.map((todo) => new Post(todo));
      })
      .catch(this.handleError);
  }
  public getTodoById(todoId: number): Observable<Post> {
    return this.http
      .get(API_URL + '/posts/' + todoId)
      .map(response => {
        return new Post(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
