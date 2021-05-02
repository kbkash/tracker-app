import { formatNumber } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { FacultyModel } from 'src/app/_core/data/user/user.model';
import { UserService } from 'src/app/_core/services/user/user.service';

@Component({
  selector: 'view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyComponent implements OnInit {

  @ViewChild('facultyFormWindow', { read: TemplateRef, static: true }) facultyFormWindowTemplate: TemplateRef<HTMLElement>;
  faculties:any

  loading:boolean = true

  lineOnHoverEffect(hover):Object{
    if (hover){
      return {
        'border-bottom': "purple 2px solid",
        'border-top': "purple 2px solid",
        'border-radius': "5px",
      }
    }
    return {}
  }

  highlightOnHoverEffect(hover):Object{
    if (hover){
      return {
        "color": "purple"
      }
    }
    return {}
  }

  openModal(facultyFormWindowTemplate, data?:string | boolean){
    this.windowService.open(
      facultyFormWindowTemplate,
      {
        title: "data",
        hasBackdrop: false,
        closeOnEsc: true,
        context: {
          username: data
        }
      }
    )
  }

  getAllFaculties(){
    this.userService.getAllFaculties().subscribe(
      async (res:any) => {
        this.loading = false
        this.faculties = res
      },
      (err:any) => {
        console.log(err)
      }
    )
  }

  


  constructor(
    private windowService: NbWindowService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllFaculties()
  }

}