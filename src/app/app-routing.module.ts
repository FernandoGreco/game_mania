import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '',  component : HomeComponent  },
  { path: 'home',  component : HomeComponent  },
  { path: 'jogos',  component : JogosComponent  },  
  { path: 'contato',  component : ContatoComponent  },
  { path:'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
