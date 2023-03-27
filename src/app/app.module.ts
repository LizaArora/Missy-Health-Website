import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WhoAreWeComponent } from './pages/who-are-we/who-are-we.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductsListComponent } from './layouts/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostCardComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    WhoAreWeComponent,
    TermsAndConditionsComponent,
    SinglePostComponent,
    SingleCategoryComponent,
    HomeComponent,
    SubscriptionFormComponent,
    TestimonialsComponent,
    ReportsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
