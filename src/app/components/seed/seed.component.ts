import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SocialService } from '../../services/social.service';
import { Observable } from 'rxjs';
import { Seed } from '../../DTOS/seed';
import { Reply } from '../../DTOS/reply';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../DTOS/author';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {


  @Input() seed: Observable<Seed>;
  private s: Seed;
  public replies: Reply[];
  public new_reply: string = '';
  private arturito: Author;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private social_service: SocialService,
    public auth: AuthorsService
  ) {
    if (this.auth.author) {
      this.auth.author.subscribe(ar => {
        this.arturito = ar;
        return;
      });
    }
   }

  ngOnInit() {
    this.get_seed(this.route.snapshot.paramMap.get('id'));
  }



  reply(): void {
    if (this.new_reply !== '' && this.new_reply !== undefined && this.new_reply !== null && this.auth.author) {
      let x: Reply = {
        author: this.arturito.displayName,
        date: '' + new Date().toLocaleString(),
        text: this.new_reply,
        ups: 0
      };
      this.s.replies.push(x);
      this.s.id = this.route.snapshot.paramMap.get('id');
      this.social_service.put_seed(this.s);
      this.new_reply = '';
    }
  }

  update(): void {
    this.s.id = this.route.snapshot.paramMap.get('id');
    this.social_service.put_seed(this.s);
  }



  get_seed(id: string) {
    if (id !== undefined && id !== null) {
      this.seed = this.social_service.get_seed(id);
      this.social_service.get_seed(id).subscribe(s => {
        this.s = s;
        this.replies = s.replies;
      })
    }
  }


  go_back(): void {
    this.location.back();
  }




}
