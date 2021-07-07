import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public name: string ='';
  public loginForm: FormGroup;
  public logingError = '';
  num: number = 1;
  num1: number = 3;
  



  constructor(private route: Router, private fb: FormBuilder, public toastController: ToastController) {
    console.log('home', 'start');
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    });


    
  }

  public test(){
    this.name = 'Shehan';
    console.log('Shehan');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password is wrong.',
      duration: 2000
    });
    toast.present();
  }


  submit(){
    console.log('run');
    console.log(this.loginForm.value)

    if((this.loginForm.value.username=='abc')&&(this.loginForm.value.password=='123')){
      this.route.navigate(['/sample']);
      this.logingError = '';
    }else{
      this.presentToast();
    }


  }


  gotoPage(){
    this.route.navigate(['/sample']);
  }

}
