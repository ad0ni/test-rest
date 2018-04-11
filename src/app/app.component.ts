import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService ]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apiService: ApiService) {}

  get posts() {
    return this.apiService.getAllTodos();
  }

  post(postId: number) {
    return this.apiService.getTodoById(postId);
  }

  public ngOnInit() {
    console.log('Calling rest api');
    this.post(1).subscribe(
        (posts) => {
          console.log(posts);
        }
      );
  }

}
