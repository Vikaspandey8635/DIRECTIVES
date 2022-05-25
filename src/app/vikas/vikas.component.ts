import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-vikas',
  templateUrl: './vikas.component.html',
  styleUrls: ['./vikas.component.css']
})
export class VikasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oncreateblock(){
    this.isvalid=!this.isvalid;
  }

 isvalid:boolean = true;

  @HostListener('click')
    onclick(){
      alert("this section");
    }

    class1={
      'text-align': 'center',
      'font-weight': 'bold',
      'color': 'darkblue'
    }

  class2= {
    'text-align': 'center',
      'font-weight': 'bold',
      'color': 'green'
  }
    
  
}
