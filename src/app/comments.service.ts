import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //si no importo no anda
import 'rxjs/add/operator/map'; //si no importo esto no anda

@Injectable()
export class CommentsService {
  endpoint = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: Http) { }


  getAll() {
    return this.http.get(this.endpoint)
        .map(response => response.json());
}


getCommentsByPostId(id) {
  return this.http.get(this.endpoint + '?postId=' + id)
      .map(response => response.json());
}

}
