import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ArtsComponent } from './arts/arts.component';
const routes: Routes = [
  // {path:'',redirectTo:'main'},
  {path: 'main', component: MainComponent},
  { path: 'about', component: AboutComponent },
  {path: 'gallery', component: ArtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
