import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/main/home/home.component';
import { UsersBoardComponent } from './routes/main/config/user/users-board/users-board.component';
import { LoginComponent } from './routes/main/login/login.component';
import { CatalogComponent } from './routes/main/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'config', component: UsersBoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
