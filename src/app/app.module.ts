import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { CapacitacionComponent } from './components/portafolio/capacitacion/capacitacion.component';
import { ContactoComponent } from './components/portafolio/contacto/contacto.component';
import { AsociadosComponent } from './components/portafolio/asociados/asociados.component';
import { ForoComponent } from './components/foro/foro.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { SocialComponent } from './components/social/social.component';
import { AuthorsService } from './services/authors.service';
import { PublicationsService } from './services/publications.service';
import { SocialService } from './services/social.service';
import { SeedComponent } from './components/seed/seed.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { UrlpipePipe } from './pipes/urlpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortafolioComponent,
    CapacitacionComponent,
    ContactoComponent,
    AsociadosComponent,
    ForoComponent,
    PublicacionComponent,
    SocialComponent,
    SeedComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    UrlpipePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "garcialopezprod"), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthorsService,
    PublicationsService,
    SocialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
