import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { COSMIC_THEME } from '@nebular/theme';
import { asyncScheduler } from 'rxjs';
import { AuthService } from 'src/app/_core/services/auth/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  newPasswordForm: FormGroup
  loading = true // change to true
  userToRecover = null

  initNewPasswordForm(){
    this.newPasswordForm = new FormGroup({
      new_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      re_password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  passwordNotMatched:boolean = false

  doPasswordChange(){
    if(this.newPasswordForm.valid){
      if(this.newPasswordForm.value.new_password == this.newPasswordForm.value.re_password){
        this.authService.updatePasssword(this.userToRecover, this.newPasswordForm.value.new_password).subscribe(
          async (res) => {
            console.log(res)
            this.router.navigateByUrl('/dashboard')
          },
          (err:any) => {
            console.log(err.error)
          }
        )
      }else{
        this.passwordNotMatched = true
        console.log('password Not matching')
      }
    }else{
      console.log('form invalid')
    }
  }

  // get new_password(){return this.newPasswordForm.get('new_password')}
  // get re_password(){return this.newPasswordForm.get('re_password')}


  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.initNewPasswordForm()
    this.actRoute.queryParams.subscribe(params => {
      this.userToRecover = params.user
      this.authService.checkPasswordToken(params.user, params.id).subscribe(
        async (res:any) => {
          console.log(res)
          if(await res.status){
            this.loading = false
          }
        },
        (err:any) => {
          console.log("error")
          console.log(err.error)
          // alert('redirect here, with a  message')
        }
      )
    })
    
  }

}
