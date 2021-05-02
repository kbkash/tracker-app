import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  cardFlipped:boolean = false
  toggleSide(){
    if(this.cardFlipped){
      this.cardFlipped = false
    }else{
      this.cardFlipped = true
    }
  }

  constructor() { }


  ngOnInit(): void {
  }

}
