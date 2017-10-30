import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
 registro;
  constructor() { }

  ngOnInit() {
    this.registro= new FormGroup({
      email : new FormControl("", Validators.compose([null,Validators.required])),
  
      password: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      direccion: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      pais: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      ciudad: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      provincia: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      codigo: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
    });}

    

  

  onSubmit (){
    console.log(this.registro.value);
  
  }
}