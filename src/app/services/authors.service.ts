import { Injectable } from '@angular/core';
import { Author } from '../DTOS/author';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  /**
   * WEB CLIENT ID
   * 124833624024-q0gg7jgjj0i8gsekrrotslj6s8h8jq96.apps.googleusercontent.com
   * SCRET ID
   * NBAw6G1kofsR-li5GgXbjhOX
   */

  private authors_collection: AngularFirestoreCollection<Author>;
  private authors: Observable<Author[]>;

  private author_doc: AngularFirestoreDocument<Author>;
  author: Observable<Author>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private route: Router
  ) {
    this.author = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
           return this.afs.doc<Author>(`authors/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  // 1. Mkae reference in const to thir service PUBLIC
  // *ngIf="auth.user | async; then authenticated else guest"

  google_login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      });
  }

  private updateUserData(user) {
    // SI EL USUSARIO NO EXISTE, LO CREA
    const userRef: AngularFirestoreDocument<Author> = this.afs.doc(`authors/${user.uid}`);
    const items: string[] = [
      'https://pro2-bar-s3-cdn-cf5.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/6716b5a6-6370-48ac-965f-3160b55ac980_rw_1200.png?h=ad54b256d8cfc3e3bfa19823db435b46',
      'https://pro2-bar-s3-cdn-cf1.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/2ae1aa1d-c9be-4a67-8fb9-3fdec94fa6ff_rw_1200.png?h=d670eb019c6ca2c8223515fe704f1d30',
      'https://pro2-bar-s3-cdn-cf1.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/98d7fe84-29d2-4e3c-9047-13a1444c6796_rw_600.png?h=ca915f979a592abdaafaa6aeb53bab3e',
      'https://pro2-bar-s3-cdn-cf.myportfolio.com/bb575a647bf9f6364214a6ea5ef32acd/1c1ecb21-df98-45dd-ad86-02489897788d_rw_600.png?h=2086e105facd4ba31537763ee1170720'
    ];
    const data: Author = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: items[Math.floor(Math.random()*items.length)],
      rol: (user.email === 'sebgarcia.26@gmail.com' || user.email === 'carloshgarciaorr@gmail.com' ) ? 'admin' : 'user'
    }
    return userRef.set(data);
  }

  logout() {
    this.afAuth.auth.signOut();
  }


//
// https://lh3.googleusercontent.com/z9czvF0TjQrs46WIiXrKAtwMZwN60cZYitILUBAeyhnIovl3vtS-PQDRJE3TUMlA0wAc7wisjyJNfDLJJg2wCox9UNRXyeo9n6hiUd3icjGpbWkltxhaVM4aFeMt4h9YD4IqYqgqqMwN3_S4I_RCDF5Mgm5IHZI63fPozPf9qz7FCdykm3io6_jlVry0NTnLhz9LKBDxgLR4oerj8dcGaM73aQqLqGjKJR3DeAs7nNcQlL6ZB5jd1FN13GCHCcr7a4chofNhNOGHg5E68ttBzNcNKRfYhc-Q1bNYZBj0WcC3g4YxMmqES_nflSDCMbu6mBXRzYKpwztrI29b--KazKD4_ye2vdjiP4oarRzhEGoJh2rldpsi5jdRnmpQbc_mLBaxRo3oVdfhB3oBltnd8NcKIMj0OQmvv-aPe4nBV-YbVc-o1lbajHaBIX9cBXLd0Z8yeb_B9EYTrdvnXsmMd9jDJT-8XUqf6sPhgh_HoSx60q2MW_-tJBzwKYFDI_AkXsKiMMAg3qrDG3k05V4siRmnPtzN1dt2qId5FZDJ3l_WONdvprj1ongCYXmP3GufO0VQUxN8XfSq-Mgbie6lcmjuQ7zZA8uKk4BOa6tj=s512-no

}
