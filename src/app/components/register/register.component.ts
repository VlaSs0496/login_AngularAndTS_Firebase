import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario={
    email: '',
    password: ''
  }
  constructor(private authService: AuthService){
    
  }
  registrarse(){
    console.log(this.usuario);
    const{email, password} = this.usuario
    this.authService.register(email, password).then(res => {
      console.log("se registro", res)
    })
  }

  obtenerUsuarioLogeado(){
    this.authService.getUserLogin().subscribe(res => {
      console.log(res?.email)
    })
  }


  ngOnInit(): void {
  }



}
