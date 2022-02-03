import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: string;
  pass!: string;
  constructor(private router: Router) {    
    
   }  
  
  ngOnInit(): void {
  }

  ingresar(form: NgForm){
    if(form.invalid){
      Swal.fire({
        title: "Error",
        text: "Rellena los campos",
        icon: "error"        
      });
      return;
    }
    if(this.user=="admin" && this.pass=="admin"){
      Swal.fire({        
        icon: 'success',
        position: 'top-end',
        title: 'Bienvenido '+this.user,    
        showConfirmButton: false,
        timer: 2000          
      })
      this.router.navigate(['/content']);
    }else{
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "error"        
      });
      return;
    }
  }
}
