import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialService } from '../../services/social.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Seed } from '../../DTOS/seed';
import { Observable, of } from 'rxjs';
import { AuthorsService } from '../../services/authors.service';

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

  constructor(
    private social_servicce: SocialService,
    private route: ActivatedRoute,
    private location: Location,
    public auth: AuthorsService
  ) { }

  ngOnInit() {
    this.admin = true
    this.intenta_votar = false;
    this.seeds = this.social_servicce.get_seeds();
  }

  onSubmit({ value, valid }: { value: Seed, valid: boolean }): void {
    if (value.text === undefined || value.text === '') {
      value.text = '';
    }
    if (value.image === undefined || value.image === '') {
      value.image = '';
    }
    value.author = 'Username';
    value.author_image = 'https://image.ibb.co/cFgpOd/boy.png';
    value.date = '' + new Date().toLocaleString();
    value.replies = [];
    value.ups = 0;
    this.social_servicce.post_seed(value);
    this.posteado = !this.posteado;
    this.form.reset();
  }

  update(x: Seed): void {
    this.intenta_votar = true;
    if ( this.auth.author ) {
      this.social_servicce.put_seed(x);
    }
  }

  delete(id: string): void {
    if ( confirm('Seguro que quieres eleminar esta publicación?') ) {
      this.social_servicce.delete_seed(id);
    }
  }



}
