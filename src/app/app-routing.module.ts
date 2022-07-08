import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UsersComponent } from './users/users.component';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SubCategoryImageComponent } from './components/sub-category-image/sub-category-image.component';


import { WeightComponent } from './weight/weight.component';
import { Homesection1Component } from './homesection1/homesection1.component';
import { Homesection2Component } from './homesection2/homesection2.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
 import { TestimonialImguploadComponent } from './testimonial-imgupload/testimonial-imgupload.component';
import { ProductBannerComponent } from './products/product-banner/product-banner.component';
import { CorporatesComponent } from './products/corporates/corporates.component';
import { InstitutionsComponent } from './products/institutions/institutions.component';
import { IndividualComponent } from './products/individual/individual.component';
import { HomebannerComponent } from './home/homebanner/homebanner.component';
import { HomebannerImageComponent } from './home/homebanner-image/homebanner-image.component';
import { OrganizationComponent } from './home/organization/organization.component';
import { OrganizationImageComponent } from './home/organization-image/organization-image.component';
import { WhoWeAreComponent } from './home/who-we-are/who-we-are.component';
import { WhoWeAreImageComponent } from './home/who-we-are-image/who-we-are-image.component';
import { QuestionComponent } from './home/question/question.component';
import { TestComponent } from './home/test/test.component';
import { FaqBannerComponent } from './home/faq-banner/faq-banner.component';
import { FaqLabDetailsComponent } from './home/faq-lab-details/faq-lab-details.component';
import { TestimonyLabComponent } from './home/testimony-lab/testimony-lab.component';
import { TestimonyLabImageComponent } from './home/testimony-lab-image/testimony-lab-image.component';
import { SocialMediaComponent } from './home/social-media/social-media.component';
import { EquipmentsComponent } from './home/equipments/equipments.component';
import { EquipmentsDetailsComponent } from './home/equipments-details/equipments-details.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';







const routes: Routes = [
   
    {path: 'sub-categories', component: SubCategoryComponent},
    {path: 'sub-category-image/:id', component: SubCategoryImageComponent},
   
    {path: 'banner', component: BannerComponent},
    {path: 'banner-image/:id', component: BannerImageComponent},

    {path: 'header-menu', component: HeaderMenuComponent},
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
   
    {path:'HomeSectionOne',component:Homesection1Component},
    {path:'HomesectionTwo',component:Homesection2Component},
    
     {path:'testimonial-detail/:id',component:TestimonialComponent},
      {path:'testimonialimageupload/:menu/:id',component:TestimonialImguploadComponent},

  //Home Banner
     {path: 'home-banner', component: HomebannerComponent},
     {path: 'home-banner-image/:id', component: HomebannerImageComponent},
  // organization
     {path: 'organization', component: OrganizationComponent},
     {path: 'organization-image/:id', component: OrganizationImageComponent},
   //Who WE Are  
     {path: 'who-we-are', component: WhoWeAreComponent},
     {path: 'who-we-are-image/:id', component: WhoWeAreImageComponent},
    //question
     {path: 'question', component: QuestionComponent},
     //test 
     {path: 'test', component: TestComponent},
     {path: 'faq-banner', component: FaqBannerComponent},
     {path: 'faq-lab-details', component: FaqLabDetailsComponent},

     {path: 'testimony-Lab', component: TestimonyLabComponent},
     {path: 'testimony-Lab-image/:id', component: TestimonyLabImageComponent},

     {path: 'social-media', component: SocialMediaComponent},

     {path:'equipments',component:EquipmentsComponent},
     {path: 'equipments-details/:id', component: EquipmentsDetailsComponent},
     {path: 'equipments-details', component: EquipmentsDetailsComponent},

     {path: 'contact-us', component: ContactUsComponent},

    {path:'testimonial-detail/:id',component:TestimonialComponent},
    {path:'testimonialimageupload/:menu/:id',component:TestimonialImguploadComponent},
    {path:'product-banner',component:ProductBannerComponent},
    {path:'product-corporate',component:CorporatesComponent},
    {path:'product-institution',component:InstitutionsComponent},
    {path:'product-individuals',component:IndividualComponent},



    // {path: 'users', component: UsersComponent, data: {role: 'user'}, canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent},
    {path: 'unauth', component: UnauthorizedComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
