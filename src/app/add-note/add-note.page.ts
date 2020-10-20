import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Note} from '../modal/Note';
import { url } from 'inspector';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
    note: Note = {
    title: '',
    downloadurl:null,
    content: '',
    createdAt: new Date().getTime()
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private router: Router
  ) { }

  ngOnInit() {
  }

  addNote() {
    this.fbService.addNote(this.note).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }
  addPic(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.note.downloadurl = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);

  }

}
