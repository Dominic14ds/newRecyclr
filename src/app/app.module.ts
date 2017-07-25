import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/homeComponent/home.component';
import { HeaderComponent } from './components/headerComponent/header.component';
import { PostAdComponent } from './components/postAdComponent/postad.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'postad', component: PostAdComponent }
  ])],
  declarations: [AppComponent, HomeComponent, HeaderComponent, PostAdComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
