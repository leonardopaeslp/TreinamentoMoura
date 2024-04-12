import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-material',
  templateUrl: './nav-bar-material.component.html',
  styleUrls: ['./nav-bar-material.component.scss']
})
export class NavBarMaterialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public logout(){
    this.router.navigate(['']);
  }

  public CadRegImp(){
    this.router.navigate(['home/cadRegraImp']);
  }

}
