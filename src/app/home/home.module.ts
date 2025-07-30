import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../services/user.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { UserChartComponent } from './user-chart/user-chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    UserChartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HomeRoutingModule,
  ],
  providers: [
    UserService
  ]
})
export class HomeModule {}


