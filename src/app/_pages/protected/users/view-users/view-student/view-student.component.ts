import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { UserService } from 'src/app/_core/services/user/user.service';

@Component({
  selector: 'view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  @ViewChild('studentFormWindow', { read: TemplateRef, static: true }) studentFormWindowTemplate: TemplateRef<HTMLElement>;
  students:any
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

  openModal(studentFormWindowTemplate, data?:string | boolean){
    this.windowService.open(
      this.studentFormWindowTemplate,
      {
        // title: "<h1>hello</h1>",
        hasBackdrop: false,
        closeOnEsc: true,
        context: {
          username: data
        }
      }
    )
  }

  getAllStudents(){
    this.userService.getAllStudents().subscribe(
      async (res:any) => {
        this.loading = false;
        this.students = res
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
    this.getAllStudents()
  }

}
