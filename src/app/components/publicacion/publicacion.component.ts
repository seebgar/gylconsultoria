import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map } from '../../../../node_modules/rxjs/operators';
import { Publication } from '../../DTOS/publication';
import { HttpClient } from '@angular/common/http'
import { Observable } from '../../../../node_modules/rxjs';
import { Post } from '../../DTOS/post';
import { AuthorsService } from '../../services/authors.service';
import { Comment } from '../../DTOS/comment';
import { Author } from '../../DTOS/author';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicado_post: boolean = false;
  @Input() publication: Observable<Publication>;
  posts: Post[];
  private p: Publication;

  pub_model: Post = {};
  doc: string = 'na';
  nuevo_comentario: string = '';

  mujer: boolean = false;

  administrador: boolean;
  editmode: boolean;
  
  private arturito: Author;

  @ViewChild('postForm') form: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pub_service: PublicationsService,
    public auth: AuthorsService
  ) { 
    if ( this.auth.author ) {
      this.auth.author.subscribe(ar => {
        this.arturito = ar;
        return;
      });
    }
  }

  ngOnInit() {
    this.administrador = true;
    this.editmode = false;
    this.get_post(this.route.snapshot.paramMap.get('id'));
  }

  get_post(id: string) {
    if ( id !== undefined && id !== null ) {
      this.publication = this.pub_service.get_pub_by_id(id);
      this.pub_service.get_pub_by_id(id).subscribe(p => {
        this.p = p;
        this.posts = p.posts;
      })
    }
  }

  onSubmit( {value, valid}: {value: Post, valid: boolean} ) {
    if ( this.doc === 'img' ) {
      value.type = 'img';
    } else if ( this.doc === 'pdf' ) {
      value.type = 'pdf';
      value.pdf = value.image;
    } else {
      value.type = 'txt';
      value.image = '';
      value.pdf = '';
    }
    value.date = ''+ new Date().toLocaleString();
    value.visits = 0;
    value.comments = [];
    this.p.posts.unshift(value);
    this.p.id = this.route.snapshot.paramMap.get('id');
    this.pub_service.put_publication(this.p);

    this.form.reset();
    this.publicado_post = true;
    this.pub_model = {};
  }
  


  post_comment(pos: number): void {
    if ( this.nuevo_comentario !== '' && this.nuevo_comentario !== undefined && this.nuevo_comentario !== null && this.auth.author ) {
      let x: Comment = {
        date: ''+new Date().toLocaleString(),
        text: this.nuevo_comentario,
        author: this.arturito
      };
      this.p.posts[pos].comments.push(x);
      this.p.id = this.route.snapshot.paramMap.get('id');
      this.pub_service.put_publication(this.p);
      this.nuevo_comentario = '';
    }
  }


  delete(i: number):void {
    if ( confirm("Seguro que quieres eliminar esta entrada?") ) {
      this.p.posts.splice(i,1);
      this.p.id = this.route.snapshot.paramMap.get('id');
      this.pub_service.put_publication(this.p);
    }
  }



  edit_post(): void {
    this.p.posts = this.posts;
    this.p.id = this.route.snapshot.paramMap.get('id');
    this.pub_service.put_publication(this.p);
    this.editmode = !this.editmode;
  }





  goBack(): void {
    this.location.back();
  }


}
