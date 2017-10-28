import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  

  userform= new FormGroup({
    email : new FormControl(""),
    password: new FormControl(""),
    direccion: new FormControl(""),
    pais: new FormControl(""),
    ciudad: new FormControl(""),
    provincia: new FormControl(""),
    codigo: new FormControl("")




  });

  constructor() { }

  ngOnInit() {
    

  }

  onSubmit (){
    console.log(this.userform.value);
  
  }
}
