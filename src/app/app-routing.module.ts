import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
