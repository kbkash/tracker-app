import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  passwordResetForm: FormGroup
  loading:boolean = false

  initPasswordResetForm(){
    this.passwordResetForm = new FormGroup({
      username: new FormControl('iamkbkash@gmail.com', [Validators.required])
    })
  }

  doRequestPasswordReset(){
    if(this.passwordResetForm.valid){
      this.loading = true
      this.authService.recoverPasssword(this.passwordResetForm.value).subscribe(
        async (res:any) => {
          console.log(res) 
          this.loading = false
          if(await res.status){
            this.passwordResetForm.reset()
            this.router.navigate(res.message)
            // this.router.navigateByUrl(res.message) // fake email received
          }else{
            console.log(res.message)
          }
        },
        (err:any) => {
          this.loading = false
          console.log(err.error.message)
        } 
      )
    }else{
      console.log('form invalid')
    }

  }


  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    
    // var paramsThis = this.activatedRoute.snapshot.queryParamMap.get('param')
    // console.log(paramsThis)
    // console.log(this.activatedRoute.snapshot.queryParamMap)
    this.initPasswordResetForm()
  }

}
