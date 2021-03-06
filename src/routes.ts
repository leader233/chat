
import { Routes } from '@angular/router';
import { SignFormComponent } from './app/sign-form/sign-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';


export const appRoutes: Routes = [
    { path: 'signup', component: SignFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'chat', component: ChatroomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

];
