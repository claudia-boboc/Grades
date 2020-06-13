import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/main/home/home.component';
import { UsersBoardComponent } from './routes/main/config/user/users-board/users-board.component';
import { LoginComponent } from './routes/main/login/login.component';
import { CatalogComponent } from './routes/main/catalog/catalog.component';
import { TeacherCatalogComponent } from './routes/main/teacher-catalog/teacher-catalog.component';
import { AuthGaurdService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGaurdService]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService]},
  { path: 'config', component: UsersBoardComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent},
  { path: 'catalog', component: CatalogComponent, canActivate:[AuthGaurdService] },
  { path: 'teachercatalog', component: TeacherCatalogComponent, canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
