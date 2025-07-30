import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
    { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
