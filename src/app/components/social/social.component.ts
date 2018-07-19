import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Seed } from '../../DTOS/seed';
import { Observable, of } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../DTOS/author';
import { AngularFireStorage } from '../../../../node_modules/angularfire2/storage';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  seeds: Observable<Seed[]>;
  model_seed: Seed = {};
  posteado: boolean = false;
  @ViewChild('seedForm') form: any;

  intenta_votar: boolean;
  admin: boolean;

  paths: string[];

  private arturito: Author;

  constructor(
    private social_servicce: SocialService,
    private route: ActivatedRoute,
    private location: Location,
    public auth: AuthorsService,
    private storage: AngularFireStorage
  ) {
    if (this.auth.author) {
      this.auth.author.subscribe(ar => {
        this.arturito = ar;
        return;
      });
    }
  }

  ngOnInit() {
    this.admin = true
    this.intenta_votar = false;
    this.seeds = this.social_servicce.get_seeds();
  }

  onSubmit({ value, valid }: { value: Seed, valid: boolean }): void {
    if (this.auth.author) {
      if (value.text === undefined || value.text === '') {
        value.text = '';
      }
      if (value.image === undefined || value.image === '') {
        value.image = '';
      }
      value.author = this.arturito.displayName;
      value.author_image = this.arturito.photoURL;
      value.date = '' + new Date().toLocaleString();
      value.replies = [];
      value.ups = 0;
      value.photoURL = [];
      this.paths.forEach( x => {
        if ( x !== undefined) {
          value.photoURL.push(x);
        }
      });
      this.social_servicce.post_seed(value);
      this.posteado = !this.posteado;
      this.form.reset();
      this.paths = [];
    }
    this.paths = [];
  }

  receptor($event) {
    this.paths = $event;
  }

  update(x: Seed): void {
    this.intenta_votar = true;
    if (this.auth.author) {
      this.social_servicce.put_seed(x);
    }
  }

  delete(id: string): void {
    if (confirm('Seguro que quieres eleminar esta publicación?')) {
      this.social_servicce.delete_seed(id);
    }
  }



}
