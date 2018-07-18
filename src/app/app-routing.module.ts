import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { CapacitacionComponent } from './components/portafolio/capacitacion/capacitacion.component';
import { ContactoComponent } from './components/portafolio/contacto/contacto.component';
import { AsociadosComponent } from './components/portafolio/asociados/asociados.component';
import { ForoComponent } from './components/foro/foro.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { SocialComponent } from './components/social/social.component';
import { SeedComponent } from './components/seed/seed.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'portafolio', component: PortafolioComponent, data: { state: 'portafolio' } },
  { path: 'contacto', component: ContactoComponent, data: { state: 'contacto' } },
  { path: 'asociados', component: AsociadosComponent, data: { state: 'asociados' } },
  { path: 'portafolio/capacitacion', component: CapacitacionComponent, data: { state: 'capacitacion' } },
  { path: 'foro', component: ForoComponent, data: { state: 'foro' } },
  { path: 'foro/publicaciones/:id', component: PublicacionComponent, data: { state: 'publicacion' } },
  { path: 'social', component: SocialComponent, data: { state: 'social' } },
  { path: 'social/posts/:id', component: SeedComponent, data: { state: 'seed' } },
  
 // { path: '**', component: HomeComponent },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  providers: [
    // GUARD  canActivate: [Auth_Guard] 
  ]
})


export class AppRoutingModule { }
