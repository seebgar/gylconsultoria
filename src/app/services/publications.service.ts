import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Publication } from '../DTOS/publication';
import { Observable } from 'node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { Post } from '../DTOS/post';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private publications_collection: AngularFirestoreCollection<Publication>;
  private publications: Observable<Publication[]>;

  private pub_doc: AngularFirestoreDocument<Publication>;
  pub: Observable<Publication>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.publications_collection = afs.collection<Publication>('publications', ref => ref.orderBy('date', 'desc'));
  }


  /**
   * Returns an observable collection of Publications with their IDs
   */
  get_publications(): Observable<Publication[]> {
    this.publications = this.publications_collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Publication;
        data.id = a.payload.doc.id;
        return data;
      }))
    )
    return this.publications;
  }



  /**
   * Returns a Publication by ID
   * Null if not exists
   * @param id string
   */
  get_pub_by_id(id: string): Observable<Publication> {
    this.pub_doc = this.afs.doc<Publication>(`publications/${id}`);
    this.pub = this.pub_doc.valueChanges();
    return this.pub;
  }



  /**
   * POSTs a Publication to Firebase and Returns the generated ID
   * @param pub Publication object to be posted
   */
  post_publication(pub: Publication) {
    let id = undefined;
    this.publications_collection.add(pub)
      .then(
        onfulfilled => {
          id = onfulfilled.id;
        },
        onrejected => {
          console.log('Publication Rejected >> ', onrejected);
        }
      )
      .catch(error => {
        console.log("EXCAPTION! >>>> ", error);
      })
    return id;
  }


  /**
   * Updates the values of a Publication
   * @param pub Publication object to be updated
   */
  put_publication( pub : Publication): void {
    this.pub_doc = this.afs.doc<Publication>(`publications/${pub.id}`);
    this.pub_doc.update(pub);
  }


  /**
   * Deletes a Publication Document from the Database
   * @param id string
   */
  delete_publication(id:string): void {
    this.afs.doc<Publication>(`publications/${id}`)
    .delete().catch(err => alert('No se pudo eliminar la publicación. ' + err.message));
  }


}
