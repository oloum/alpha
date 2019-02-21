import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { MasterloginComponent } from './masterlogin/masterlogin.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './material-component/stepper/stepper.component';
import { GridComponent } from './material-component/grid/grid.component';
import { ToolbarComponent } from './material-component/toolbar/toolbar.component';
import { StarterComponent } from './starter/starter.component';
import { ProgressSnipperComponent } from './material-component/progress-snipper/progress-snipper.component';

export const AppRoutes: Routes = [
  {
    path: 'login', component: MasterloginComponent, data: { title: 'First Component' },
    children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'main',
    component: MasterlayoutComponent,
    children: [
      { path: 'starter', component: StarterComponent },
      { path: 'listuser', component: GridComponent },
      { path: 'listprofil', component: ToolbarComponent },
      { path: 'saisi', component: StepperComponent },
      { path: 'listdoc', component: ProgressSnipperComponent }
    ]
  },
  {path : '', redirectTo : 'login',
   pathMatch : 'full'},
];
