import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AjoutdocComponent } from './ajoutdoc/ajoutdoc.component';
import { MasterloginComponent } from './masterlogin/masterlogin.component';
import { LoginComponent } from './login/login.component';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { StarterComponent } from './starter/starter.component';
import { ToolbarComponent } from './material-component/toolbar/toolbar.component';
import { ProgressSnipperComponent } from './material-component/progress-snipper/progress-snipper.component';
import { GridComponent } from './material-component/grid/grid.component';
import { StepperComponent } from './material-component/stepper/stepper.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AjoutdocComponent,
    MasterloginComponent,
    LoginComponent,
    MasterlayoutComponent,
    StarterComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    StepperComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    DemoMaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  entryComponents: [
    AjoutdocComponent
],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
