import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UpperCasePipe } from './upper-case.pipe';
import { GithDirective } from './gith.directive';
// const routes:Routes=[
//   {path:"user",component:UserprofileComponent},

// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserProfileComponent,
    UserFormComponent,
    RepositoriesComponent,
    UpperCasePipe,
    GithDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


