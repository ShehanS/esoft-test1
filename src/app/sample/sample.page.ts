import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
})
export class SamplePage implements OnInit {
  names = ['User1', 'User2', 'User3', 'User4', 'User5','User6'];


  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.names);  

  }


  gotoPage(){
    this.route.navigate(['/home']);

  }
}

