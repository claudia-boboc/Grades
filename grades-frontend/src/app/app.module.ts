

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthService } from './routes/main/login/auth.service';
import { AuthGaurdService } from './auth-guard.service';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationMenuComponent } from './navigation-bar/navigation-menu/navigation-menu.component';
import { NavigationMenuService } from './navigation-bar/navigation-menu/navigation-menu.service';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBVZNzhkNknzHIczlwrMMd6bUiO1h4QvQE",
  authDomain: "grades-61599.firebaseapp.com",
  databaseURL: "https://grades-61599.firebaseio.com",
  projectId: "grades-61599",
  storageBucket: "grades-61599.appspot.com",
  messagingSenderId: "781630341225",
  appId: "1:781630341225:web:e8038ef95c911da53562f8",
  measurementId: "G-WGQQ3XC9CC"
};

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
    AddGradeComponent,
    NavigationBarComponent,
    NavigationMenuComponent
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
    FlexLayoutModule
  ],

  providers: [UserService, AuthService, AuthGaurdService, NavigationMenuService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    AddGradeComponent
  ],
  exports: [HomeComponent]
})
export class AppModule { }
