import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: string = '';
  public senha: string | number = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public realizarLogin(){

    //Após verificações, navegar para a Home
    this.router.navigate(['/home']);
  }
}
