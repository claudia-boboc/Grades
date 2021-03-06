import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/main/home/home.component';
import { LoginComponent } from './routes/main/login/login.component';
import { CatalogComponent } from './routes/main/catalog/catalog.component';
import { TeacherCatalogComponent } from './routes/main/teacher-catalog/teacher-catalog.component';
import { AuthGaurdService } from './auth-guard.service';
import { ConfigBoardComponent } from './routes/main/config/config-board/config-board.component';
import { AccountInfoComponent } from './routes/main/account-info/account-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGaurdService]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService]},
  { path: 'config', component: ConfigBoardComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent},
  { path: 'catalog', component: CatalogComponent, canActivate:[AuthGaurdService] },
  { path: 'teachercatalog', component: TeacherCatalogComponent, canActivate:[AuthGaurdService] },
  { path: 'accountInfo', component: AccountInfoComponent, canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
