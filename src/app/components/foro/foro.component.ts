import { Component, OnInit, ViewChild } from '@angular/core';
import { Publication } from '../../DTOS/publication';
import { Router } from '@angular/router';
import { PublicationsService } from '../../services/publications.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from '../../../../node_modules/rxjs';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  admin: boolean;
  actualizando: boolean;
  publicado: boolean = false;
  mujer: boolean = false;

  @ViewChild('publicationForm') form: any;

  publication: Publication = {};
  publications: Observable<Publication[]>;

  constructor(
    private router: Router,
    private pub_service: PublicationsService,
    private auth: AuthorsService
  ) { }

  ngOnInit() {
    this.actualizando = false;
    this.admin = true;
    this.publications = this.pub_service.get_publications();
    //this.sort_publications();
  }


  onSubmit({ value, valid }: { value: Publication, valid: boolean }): void {
    value.date = new Date().toLocaleString();
    value.visits = 0;
    value.posts = [];
    this.pub_service.post_publication(value);

    this.form.reset();
    this.publicado = true;
    this.publication = {};
    //this.sort_publications();
  }



  delete(id: string): void {
    if (confirm("Seguro que quieres borrar esta publicación?")) {
      this.pub_service.delete_publication(id);
    }
  }

  update({ value, valid }: { value: Publication, valid: boolean }, id: string): void {
    value.id = id;
    this.pub_service.put_publication(value);
    this.actualizando = true;
  }

}
