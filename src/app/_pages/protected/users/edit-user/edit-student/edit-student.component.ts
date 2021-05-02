import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/_core/services/user/user.service';

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  @Input() studentID: string 
  student:any = {
    username:"",
    email:"",
    first_name:"",
    middle_name:"",
    last_name:"",
    phone_number:"",
    address:"",
    addmission_session:""
  }

  loading:boolean = false
  studentForm: FormGroup

  getOneStudent(username){
    this.userService.getOneStudent(username).subscribe(
      async (res:any) => {
        console.log(res)
        this.student = res
        this.loading = false
      },
      (err:any) => {
        console.log(err)
      }
    )
  }

  initStudentForm(){
    console.log("form init")
    this.studentForm = new FormGroup({
      username          : new FormControl(this.student['username']),
      email             : new FormControl(this.student.email),
      first_name        : new FormControl(),
      middle_name       : new FormControl(),
      last_name         : new FormControl(),
      phone_number      : new FormControl(),
      address           : new FormControl(),
      admission_session : new FormControl()
    })
  }


  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    // console.log(this.studentID )
    if(this.studentID){
      this.loading = true
      this.getOneStudent(this.studentID)
    }
    this.initStudentForm()
  }

  ngOnDestroy(): void {
    this.studentID = undefined
  }

}
