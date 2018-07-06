import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ManageItemBankComponent } from "./manage-item-bank/manage-item-bank.component";
import { CreateExamComponent } from "./create-exam/create-exam.component";
import { PrintExamComponent } from "./print-exam/print-exam.component";
import { ManageTeacherComponent } from "./manage-teacher/manage-teacher.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { CdkTableModule } from "@angular/cdk/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { HeaderComponent } from "./header/header.component";

import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material/dialog";
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderLoginFormComponent } from './header-login-form/header-login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes} from '@angular/router';
import { UserService } from "./user.service";
import { AuthguardGuard } from "./authguard.guard";
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
// import { BackendService } from "./services/backend.service";
const appRoutes:Routes = [
  
  {
    path: 'users',
    // pathMatch: 'full',
    // component: UserComponent,
    children:[
      {
        path: ':name',
        component: UserComponent
      },
      {
        path: ':name/:id',
        component: UserComponent
      }
    ]
  },
  // {
  //   path: 'users/:name/:id',
  //   component: UserComponent
  // },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: '',
    component: LoginFormComponent
  }
  // },
  // {
  //   path: '**',
  //   component: NotfoundComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    ManageItemBankComponent,
    CreateExamComponent,
    PrintExamComponent,
    ManageTeacherComponent,
    SidebarComponent,
    HeaderComponent,
    LoginFormComponent,
    HeaderLoginFormComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent,
    SchedulerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),  // new add from make login_form
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
