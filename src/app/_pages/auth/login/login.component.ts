import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  
  initLoginForm(){
    this.loginForm = new FormGroup({
      username  : new FormControl('', [Validators.required]),
      password  : new FormControl('', [Validators.required])
    })
  }
  
  doLogin(){
    // console.log("OK")
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        async (res:any) => {
          this.router.navigateByUrl(this.authService.return)
        },
        (err:any) =>{
          console.log(err.error.message)
        } 
      )
    }
    
  }



  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    this.initLoginForm()
  }

}
