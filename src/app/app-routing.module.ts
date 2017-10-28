import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealhomeComponent} from "./realhome/realhome.component";
import {HomeComponent} from "./home/home.component";
import { FormularioComponent } from './formulario/formulario.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';

import {NosotrosComponent} from './nosotros/nosotros.component';
import {CommentsComponent} from './comments/comments.component';



const routes: Routes = [ {path: '', component:RealhomeComponent},{path: 'home', component:RealhomeComponent} ,{path: 'nosotros', component:NosotrosComponent} ,{path: 'contacto' , component:FormularioComponent },

{path:"post/:id", component: CommentsComponent},  {path:"**", component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }


 