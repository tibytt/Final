import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  user : User;
  isLoading: Boolean = true;

  constructor(private route : ActivatedRoute, private service : UserService) { }

  private getUserP(id: number) {
    this.service.get(id).subscribe((user) => {
      this.user = user;
    }, (error) => {
        console.error(error);
      }, () => {
          this.isLoading = false;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getUserP(id);
    })
  }

}