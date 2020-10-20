import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Note} from '../modal/Note';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private notes: Observable<Note[]>;
  cartItemCount: BehaviorSubject<number>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void {
    this.notes = this.fbService.getNotes();
    this.cartItemCount = this.fbService.getItemCount();
  }

}
