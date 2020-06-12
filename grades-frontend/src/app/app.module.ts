

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersBoardComponent } from './routes/main/config/user/users-board/users-board.component';
import { HomeComponent } from './routes/main/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule, MatListModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatSelectModule, MatChipsModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatNativeDateModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { UserFormComponent } from './routes/main/config/user/users-board/user-form/user-form.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoleFormComponent } from './routes/main/config/user/users-board/role-form/role-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './routes/main/config/user/users.service';
import { LoginComponent } from './routes/main/login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CatalogComponent } from './routes/main/catalog/catalog.component';
import { MatTableModule } from '@angular/material/table';
import { TeacherCatalogComponent } from './routes/main/teacher-catalog/teacher-catalog.component';
import { AddGradeComponent } from './routes/main/add-grade/add-grade.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    UsersBoardComponent,
    HomeComponent,
    UserFormComponent,
    RoleFormComponent,
    LoginComponent,
    CatalogComponent,
    TeacherCatalogComponent,
    AddGradeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireDatabaseModule,
    CdkTableModule,
    MatTooltipModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddGradeComponent
  ],
  exports: [HomeComponent]
})
export class AppModule { }
