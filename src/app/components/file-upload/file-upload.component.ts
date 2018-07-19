import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';
import { tap, map } from 'rxjs/operators';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../DTOS/author';
import { finalize } from 'rxjs/operators';



//selector: 'app-file-upload',


@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  // Main task 
  task: AngularFireUploadTask;
  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;

  // State for dropzone CSS toggling
  isHovering: boolean;
  private arturito: Author;

  paths: string[];
  @Output() pathsEvent = new EventEmitter<string[]>();

  constructor
    (
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private auth: AuthorsService
    ) {
    this.paths = [];
    if (this.auth.author) {
      this.auth.author.subscribe(ar => {
        this.arturito = ar;
      })
    }
  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  /**
   * Uploads an image to Firebase Stogae and returns the PATH to the location
   * of the image
   * @param event Image to be updated
   */
  startUpload(event: FileList) {
    this.paths = [];
    // The File object
    let x = 0;
    let paths: string[] = [];

    while (x < event.length) {

      const file = event.item(x);

      // Client-side validation example
      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ')
        continue;
      }

      // The storage path
      const date = new Date().getTime();
      const name = `${date}_SOCIAL_${file.name}`;
      const path = `images/${name}`;

      // Totally optional metadata
      const customMetadata = { app: 'G&L-Social' };

      // The main task
      this.task = this.storage.upload(path, file, { customMetadata })

      // Progress monitoring
      this.percentage = this.task.percentageChanges();
      // ENLACE CON DATABASE,con pipe
      this.snapshot = this.task.snapshotChanges();

      // The file's download URL -this.task.downloadURL();
      
      paths.push(path);
      x++;
    }

    this.paths = paths;
    this.get_paths();
  }


  get_paths() {
    this.pathsEvent.emit(this.paths);
  }



  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }




}
