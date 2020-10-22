import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Note} from '../modal/Note';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit, AfterViewInit {
  note: Note = {
    id: '',
    title: '',
    downloadurl:null,
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  }

  updateNote() {
    this.fbService.updateNote(this.note).then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }
   upPic(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.note.downloadurl = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
     this.fbService.updateNote(this.note);
  }
}
