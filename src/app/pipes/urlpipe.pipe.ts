import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '../../../node_modules/angularfire2/storage';

@Pipe({
  name: 'urlpipe'
})
export class UrlpipePipe implements PipeTransform {


  constructor(
    private storage: AngularFireStorage
  ){}

  transform(value: any, args?: any) {

    let x = this.storage.ref(value).getDownloadURL();

    return x;
  }

}
