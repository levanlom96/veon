import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SingleInfoComponent } from './personal-info/single-info/single-info.component';
import { SingleInfoEditFormComponent } from './personal-info/single-info/single-info-edit-form/single-info-edit-form.component';
import { PersonalInfoAttentionComponent } from './personal-info-attention/personal-info-attention.component';
import { SessionService } from './Services/session.service';

const APP_ROUTES: Routes = [
  { path: '', component: PersonalInfoComponent},
  { path: 'attention', component: PersonalInfoAttentionComponent},
  { path: '**', component: PersonalInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SingleInfoComponent,
    SingleInfoEditFormComponent,
    PersonalInfoAttentionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
