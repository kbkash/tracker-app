import { Component, Input, OnInit } from '@angular/core';
import { FacultyModel } from 'src/app/_core/data/user/user.model';
import { UserService } from 'src/app/_core/services/user/user.service';

@Component({
  selector: 'edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.scss']
})
export class EditFacultyComponent implements OnInit {

  @Input() facultyID:string
  faculty:any
  loading:boolean = false
  getOneFaculty(username){
    this.userService.getOneFaculty(username).subscribe(
      async (res:any) => {
        // console.log(res)
        this.faculty=res
        console.log(this.faculty)
        this.loading = false

      },
      (err:any) => {
        console.log(err)
      }
    )
  }

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    if(this.facultyID){
      this.loading = true
      this.getOneFaculty(this.facultyID)
    }
    console.log(this.facultyID)
    console.log("edit/add faculty")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.facultyID = undefined
  }
}
