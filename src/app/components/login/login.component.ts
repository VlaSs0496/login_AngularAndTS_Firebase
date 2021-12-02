import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email: '',
    password: ''
  }
  constructor(private authService: AuthService){
    
  }
  Ingresar(){
    console.log(this.usuario);
    const{email, password} = this.usuario
    this.authService.login(email, password).then(res => {
      console.log("se registro", res)
    })
  }
  IngresarConGoogle(){
    console.log(this.usuario);
    const{email, password} = this.usuario
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("se registro", res)
    })
  }
  IngresarConGit(){
    console.log(this.usuario);
    const{email, password} = this.usuario
    this.authService.loginWithgithub(email, password).then(res => {
      console.log("se registro", res)
    })
  }
  IngresarConFB(){
    console.log(this.usuario);
    const{email, password} = this.usuario
    this.authService.loginWithFB(email, password).then(res => {
      console.log("se registro", res)
    })
  }
  obtenerUsuarioLogeado(){
    this.authService.getUserLogin().subscribe(res => {
      
      console.log(res?.email)

    })
  }
  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
