\import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsListComponent } from './admins-list/admins-list.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    DashboardComponent,
    AdminsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdministrationRoutingModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AdministrationModule { }