import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbOptionModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTabsetModule, NbThemeModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { ProtectedComponent } from './protected.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TestboardComponent } from './testboard/testboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './themes/footer/footer.component';
import { HeaderComponent } from './themes/header/header.component';
import { MenuComponent } from './themes/menu/menu.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
// import { EditUserComponent } from './users/edit-user/edit-user.component';
import { StudentMarksComponent } from './marks/student-marks/student-marks.component';
import { ViewFacultyComponent } from './users/view-users/view-faculty/view-faculty.component';
import { ViewStudentComponent } from './users/view-users/view-student/view-student.component';
import { EditFacultyComponent } from './users/edit-user/edit-faculty/edit-faculty.component';
import { EditStudentComponent } from './users/edit-user/edit-student/edit-student.component';


@NgModule({
  declarations: [
    ProtectedComponent, 
    FooterComponent, 
    HeaderComponent, 
    MenuComponent,
    DashboardComponent, 
    TestboardComponent,  
    ViewUsersComponent, 
    // EditUserComponent, 
    StudentMarksComponent, 
    ViewFacultyComponent, 
    ViewStudentComponent, 
    EditFacultyComponent, 
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule,
    NbEvaIconsModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbSearchModule,
    NbSelectModule,
    NbOptionModule,
    NbListModule,
    NbUserModule,
    NbContextMenuModule,
    NbCheckboxModule,
    NbButtonModule,
    NbTabsetModule,
    NbWindowModule.forChild(),
    NbSpinnerModule

  ],
  providers: [],
  bootstrap: [ProtectedComponent]
})
export class ProtectedModule { }
