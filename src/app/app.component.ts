import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './services/authors.service';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  icons: string[] = [
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/4c56c2eb-6e30-4a04-a564-9193e8358db4_rw_600.png?h=936e65dfd6ce5a21a4b3495ef1eff437',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/89012b85-3e38-4c25-b295-29ec6f7b773c_rw_600.png?h=625675bbf6d479e28d0224471e200401',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/c33fcc0e-a7f9-40ec-8446-00a4254aa797_rw_600.png?h=fe6c50ef54409e34efd776d39f178bf6',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/4548a60a-e8c2-45d6-8404-308a7998d1ff_rw_600.png?h=243006139eb27a493c1dbfb0e778995c',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/47213055-9723-4e11-a3f1-4645bb7ff19a_rw_600.png?h=96ca61b74339fd7d1087a66be67b545d',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/86c522c7-92ce-4227-a783-140b01cb051d_rw_600.png?h=6e56f7f7754732ea7003b8114176cd0d',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/9d2c7f39-18ae-414e-b491-f325be1fcc80_rw_600.png?h=625cd385fbce2231188cc73d0220aad7',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/974504c8-510d-4fa8-804a-25d50faef40f_rw_600.png?h=a04884785b94d7c0368c14320232a9f6',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/beeffdb8-bfdd-4fb2-a989-3f8def2f67f7_rw_600.png?h=3d8268dba33abbcf279f4326f3910b9a',
    'https://pro2-bar-s3-cdn-cf5.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/6ed8b436-8680-43cc-b594-d2f398d267f7_rw_600.png?h=8edf5f96a2b6565c63647ae7620886ee',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/4172a460-4779-4ef1-aa78-61051971bf09_rw_600.png?h=645b8c7fbae6bddddfe1bdc71194ddde',
    'https://pro2-bar-s3-cdn-cf5.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/605a3348-ffb7-47a8-bd84-e832737065b8_rw_600.png?h=35b0737ec76a63e621c41ba3cbef1c0f',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/7bf4642d-0c2e-45fb-a30c-e1cc8d10632b_rw_600.png?h=4248b50a619a2fee84ee1b081d99bdbb',
    'https://pro2-bar-s3-cdn-cf2.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/33ed8aa3-7379-4feb-906c-ed74a9085033_rw_600.png?h=9ed5e6eb1fce62f78aba5d245438cbce',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/788e1a50-4626-4094-9597-c01175040e42_rw_600.png?h=a08d57c466ece7461749304728b3633d',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/9469c35a-fd04-4193-a678-6e70254a22cf_rw_600.png?h=d6510e948618ec4182959283fbd6e038',

    
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/c3da26e1-3e93-4682-9136-52e2de85d47e_rw_600.png?h=b302299062fd6041c306e8bd72fcfc92',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/293fe5e7-4ce8-4e40-8818-5d33ec6e8833_rw_600.png?h=7d4c6e205672f1a0bcab77ad8a75c42f',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/29cbd013-9af3-4585-a426-c6b87e2eea83_rw_600.png?h=4f8334239aba047e27fae311632f5ade',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/12b2c8b0-f2a6-443e-9b0d-cc9a6ed58797_rw_600.png?h=3bd0846540440b6b6fb2ac99e8e4a766',
    'https://pro2-bar-s3-cdn-cf2.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/d8a327c1-33e0-42e5-a5c2-36353640d243_rw_600.png?h=4fdf081b3a2f6825aa72f2dcb27b4d8a',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/0ffef441-7092-4a3e-a196-91d1f4b235b8_rw_600.png?h=f49009f94306c816c4cc4d6a63a85da4',
    'https://pro2-bar-s3-cdn-cf2.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/d0dd4a3e-ed84-474a-8a59-829ba5ab011e_rw_600.png?h=e3ae1be8ecbf32eda64e20c852d0afcc',
    'https://pro2-bar-s3-cdn-cf4.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/590d5c79-4bb1-453e-a1c1-b048486dca18_rw_600.png?h=b442aa78ebe232b9047aeffb2ec331c1',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/4647643b-5ac0-4287-bb3a-87fdb5198246_rw_600.png?h=158ae670f3094bc27b792034fccda37a',
    'https://pro2-bar-s3-cdn-cf4.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/5d2bf32a-0399-4dab-bed0-7840ab70ec95_rw_600.png?h=0a8c9a9e374d3d0ef0cfeaae454afe58',
    'https://pro2-bar-s3-cdn-cf2.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/392a8c6c-36ef-441a-8861-cc12b9995c2f_rw_600.png?h=220ea6d2bfc65992162682dea72c1829',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/23741cce-f104-4ad2-bfdd-75fc5447ca97_rw_600.png?h=4d62ecf8092b4dc265410e07f0eb501f',
    'https://pro2-bar-s3-cdn-cf4.myportfolio.com/c1b6fe608e89651496ea32f62ec42ecc/5e35dc9f-4aeb-4b4f-aaac-a9757c1839a2_rw_600.png?h=0e514d9aa785c45659003d12978ccc4f'

  ];


  private id;

  constructor(
    public auth: AuthorsService,
    private afs: AngularFirestore
  ) {
    if ( this.auth.author ) {
      this.auth.author.subscribe(ar => {
        if ( ar !== null && ar !== undefined ) {
          this.id = ar.uid;
        }
      })
    }
  }

  ngOnInit() {
  }


  update_icon(i: string) {
    if ( this.auth.author ) {
      this.afs.doc(`authors/${this.id}`).update({photoURL: i});
    }
  }

}
