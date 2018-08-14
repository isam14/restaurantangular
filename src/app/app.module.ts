import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {CarteComponent} from './carte/carte.component';
import {ReserveComponent} from './reserve/reserve.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes, Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CategoriesComponent} from './categories/categories.component';
import {DetailsComponent} from './details/details.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, { //http://localhost:4200
        path: 'carte',
        component: CarteComponent
    }, { //http://localhost:4200/carte
        path: 'reserve',
        component: ReserveComponent
    }, { //http://localhost:4200/reserve
        path: 'contact',
        component: ContactComponent
    }, { //http://localhost:4200/contact
        path: 'categories',
        component: CategoriesComponent
    },
    {
      path: 'login', component: LoginComponent
    }
];
@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        HomeComponent,
        CarteComponent,
        ReserveComponent,
        ContactComponent,
        CategoriesComponent,
        DetailsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}