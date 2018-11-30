import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'create', component: CreateComponent},
    { path: '**', component: HomeComponent, data: {title: 'Error Page'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
