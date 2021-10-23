import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.css']
})
export class TempleteComponent implements OnInit {

  usuario = {
    nombre: 'Brahyan',
    apellido: 'Arteaga',
    correo: 'blarteagaa@gmail.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    console.log(form);
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(form.value);
    
  }

}
