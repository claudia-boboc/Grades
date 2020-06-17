

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/main/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule, MatListModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatSelectModule, MatChipsModule, MatAutocompleteModule, MatInputModule, MatDialogModule, MatNativeDateModule, MatTabsModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigBoardService } from './routes/main/config/config-board/config-board.service';
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
import { AuthService } from './routes/main/login/auth.service';
import { AuthGaurdService } from './auth-guard.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationMenuComponent } from './navigation-bar/navigation-menu/navigation-menu.component';
import { NavigationMenuService } from './navigation-bar/navigation-menu/navigation-menu.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './app.model';
import { ConfigBoardComponent } from './routes/main/config/config-board/config-board.component';
import { SubjectFormComponent } from './routes/main/config/config-board/subject-form/subject-form.component';
import { ClassFormComponent } from './routes/main/config/config-board/class-form/class-form.component';
import { StudentFormComponent } from './routes/main/config/config-board/student-form/student-form.component';
import { TeacherFormComponent } from './routes/main/config/config-board/teacher-form/teacher-form.component';
import { ViewDetailsComponent } from './routes/main/config/config-board/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigBoardComponent,
    HomeComponent,
    LoginComponent,
    CatalogComponent,
    TeacherCatalogComponent,
    AddGradeComponent,
    NavigationBarComponent,
    NavigationMenuComponent,
    SubjectFormComponent,
    ClassFormComponent,
    StudentFormComponent,
    TeacherFormComponent,
    ViewDetailsComponent

  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
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
    MatTooltipModule,
    FlexLayoutModule,
    MatTabsModule
  ],

  providers: [ConfigBoardService, AuthService, AuthGaurdService, NavigationMenuService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddGradeComponent
  ],
  exports: [HomeComponent]
})
export class AppModule { }
