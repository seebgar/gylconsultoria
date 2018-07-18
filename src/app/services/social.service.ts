import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Seed } from '../DTOS/seed';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private seed_collection: AngularFirestoreCollection<Seed>;
  private seeds: Observable<Seed[]>;

  private seed_doc: AngularFirestoreDocument<Seed>;
  private seed: Observable<Seed>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { 
    this.seed_collection = afs.collection<Seed>('seeds');
  }




  /**
   * Returns an observable collection of Seeds with their IDs
   */
  get_seeds(): Observable<Seed[]> {
    this.seeds = this.seed_collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Seed;
        data.id = a.payload.doc.id;
        return data;
      }))
    )
    return this.seeds;
  }



  /**
   * Returns a Seed by ID
   * Null if not exists
   * @param id string
   */
  get_seed(id: string): Observable<Seed> {
    this.seed_doc = this.afs.doc<Seed>(`seeds/${id}`);
    this.seed = this.seed_doc.valueChanges();
    return this.seed;
  }




  /**
   * POSTs a Publication to Firebase and Returns the generated ID
   * @param pub Publication object to be posted
   */
  post_seed(seed: Seed) {
    this.seed_collection.add(seed)
      .catch(error => {
        console.log("EXCAPTION! >>>> ", error);
      })
  }



  /**
   * Updates the values of a Seed
   * @param pub Publication object to be updated
   */
  put_seed( seed : Seed): void {
    this.seed_doc = this.afs.doc<Seed>(`seeds/${seed.id}`);
    this.seed_doc.update(seed);
  }



  /**
   * Deletes a Seed Document from the Database
   * @param id string
   */
  delete_seed(id:string): void {
    this.afs.doc<Seed>(`seeds/${id}`).delete()
    .catch(err => alert('Could not delete Social Seed. ' + err.message));
  }



}
