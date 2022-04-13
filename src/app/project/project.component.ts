import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  card:Boolean = true;
v1=false;
v2=false;
v3=false;
  constructor() { }

  ngOnInit(): void {
  }
  clicked1()
  {
    this.card = false;
    this.v1=true;
  }
  clicked2()
  {
    this.card = false;
    this.v2=true;
  }
  clicked3()
  {
    this.card = false;
    this.v3=true;
  }
getBack()
{
  this.card = true;
  this.v1=false;
  this.v2 = false;
  this.v3 = false;
}
}
