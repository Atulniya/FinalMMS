import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { User } from "./Shared/user.model";
import { FormsModule } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
